import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import News from './pages/News';
import theme, { colors } from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App" style={{backgroundColor: colors.bg.dark}}>
        <News />
      </div>
    </ChakraProvider>
  );
}

export default App;
