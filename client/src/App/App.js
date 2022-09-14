import styles from './App.scss';
import Container from '@mui/material/Container';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
import Registration from './Pages/Registration';
import Login from './Pages/Login';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
