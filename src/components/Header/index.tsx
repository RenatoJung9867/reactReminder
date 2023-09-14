import { useState } from "react"
import reminderLogo from "../../assets/images/yellowLogo2.jpg"
import { Button } from "../Button";
import { Container } from "./styles";
import { NewStickyModal } from "../New StickyModal";

export function Header() {

    const [isModalOpen, setisModalOpen] = useState(false);

    function handleOpenModal() {
        setisModalOpen(true);
    }

    function handleCloseModal() {
        setisModalOpen(false);        
    }

    return (

         <Container>
            <img src={reminderLogo} alt="Logo React Reminder" />
        
            
            <Button title="Adicionar Lembrete" onClick={handleOpenModal} />

            <NewStickyModal isOpen={isModalOpen} onRequestClose={handleCloseModal}/>


    </Container>
    );
}