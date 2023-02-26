import styled from "styled-components";
import TodoList from "./components/TodoList";

function App() {

  return (
    <StyledApp>
      <StyledHeading>Todo App</StyledHeading>
      <TodoList/>
    </StyledApp>
  )
}

export default App

const StyledApp = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  padding-top: 80px;
  padding-bottom: 80px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #F0F8FF;
  border-radius: 10px;
  width: 70%;
`

const StyledHeading = styled.h1`
  display: flex;
  justify-content: center;
  color: black;
  font-size: 40px;
  margin-bottom: 30px;
  `