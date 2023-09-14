
import Modal from "react-modal"
import { Container } from "./styles"
import { Button } from "../Button";
import { useContext, useState } from "react";
import NotesContext from "../../Hooks/notesContext";

interface ModalProps {

        isOpen: boolean;
        onRequestClose: () => void;
}

    Modal.setAppElement("#root");

    export function NewStickyModal({isOpen, onRequestClose }: ModalProps ){

        const[stickyName, setStickyName] = useState("");
        const[stickyDescription, setStickyDescription] = useState("");
        const{notes, setNotes} = useContext<any>(NotesContext);

        const formData = {
            title: stickyName,
            description: stickyDescription,
        }

        function handleFormSubmit(event: any) {
            event.preventDefault();
            event.target.reset();
            onRequestClose(); 
        }

        return (
            <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose} 
            shouldCloseOnEsc
            className="react-modal-content"
            style={{overlay:{background: "rgba(0,0,0,0.409)"} } }>
                <Container onSubmit={handleFormSubmit}>
                    <h1>Criar Lembrete</h1>
                    <div>
                        <input 
                        type="text" 
                        placeholder="nome lembrete" 
                        onChange={(event) => setStickyName(event.target.value)} />
                        <textarea 
                        placeholder="descrição" 
                        onChange={(event) => setStickyDescription(event.target.value)}/>

                    </div>
                    <Button title="Adicionar Lembrete" 
                    onClick={() => setNotes([...notes, formData])}/>
                </Container>
            </Modal>
        )


}