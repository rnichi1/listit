import { styled } from 'styled-components';
import './App.css';
import { List } from './components/List';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <List title="📝 Your personal list " />
    </AppContainer>
  );
}

export default App;
