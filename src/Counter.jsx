import styled from "styled-components"

export default function Counter({onNumberClick, onClearClick, count}){
  const formattedCount = count.toString().padStart(4, '0')
  return (
    <CounterContainer>
      <CounterTitle>Counter App</CounterTitle>
      <CounterNumber>{count === 0 ? "0000" : formattedCount}</CounterNumber>
      <ButtonGroup>
        <ButtonType id="minus" onClick={onNumberClick}>
          -
        </ButtonType>
        <ButtonType id="plus" onClick={onNumberClick}>
          +
        </ButtonType>
      </ButtonGroup>
      <ClearButton onClick={onClearClick}>Clear</ClearButton>
    </CounterContainer>
  );
}

const CounterContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e8eaec;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
const CounterTitle = styled.h3`
  font-weight: 600;
  font-size: 24px;
`
const CounterNumber = styled.div`
  font-size: 32px;
  margin: 16px;
`
const ButtonGroup = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  margin-bottom: 16px;
`;
const ButtonType = styled.button`
  background-color: #D4D4D4;
  font-size: 24px;
  width: 100%;
`;

const ClearButton = styled.button`
  background-color: transparent;
  color: #929085;
  &:hover {
    color: #242424;
    text-decoration: underline;
  }
`;