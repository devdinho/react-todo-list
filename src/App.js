import Form from './components/Form';
import styled from 'styled-components';

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  min-height: 100vh;
  align-items: center;
`;

function App() {
  return (
    <TodoContainer>
      <h1>Todo List</h1>
      <Form/>
    </TodoContainer>
  );
}

export default App;
