import { styled } from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;

.reminderTitle {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  margin: 3rem 0;

  > h1 {

    color: var(--yellow-900);
    font-family: "Quicksand";
    text-shadow: 2px 3px 3px rgb(57, 57, 43);
} } ` ;

export const Grid = styled.div`
 display: flex;
 width: 100%;
 justify-content: center;

> div {
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 1.5rem;
  grid-column-gap: 2.5rem;

  width: 90%;

  margin-bottom: 5rem;
}

> div > div {
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 15rem;
  padding: 1rem;
  gap: 1rem;

  background-color: var(--yellow-300);

  border-radius: 0.4rem;
  
  > h2 {
  font-family: "Quicksand";
  color: var(--font-black);
}
  > p {
    font-family: "Quicksand";
    width: 90%;
    text-align: center;
    overflow: auto;
    word-break: break-all;
    color: var(--font-black);

    &::-webkit-scrollbar {
        display: none;
        
    }
  }

}
`;
