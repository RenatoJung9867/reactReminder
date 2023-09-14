import styled from "styled-components";

export const Container = styled.button`

display: flex;
padding: 0.7 rem 1.5 rem;

background-color: var(--yellow-600);
color: var(--font-black);

font-family: "Quicksand";

border: none;
border-radius: 0.2rem;

transition: all 0.3s ease-in-out;

&:hover {
    cursor: pointer;
    opacity: 0.8;

}
`;
