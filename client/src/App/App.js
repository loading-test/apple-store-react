import './App.css';
import Container from '@mui/material/Container';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {

  return (
    <>
      <Header />
      <Container maxWidth='xl'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
      </>
  );
}

export default App;
