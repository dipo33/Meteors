import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import MeteorPage from './components/meteor-page/MeteorPage';
import axios from 'axios';

function App() {
  axios.defaults.baseURL = 'http://localhost:3000';

  return (
    <BrowserRouter>
      <Header />
      <MeteorPage />
    </BrowserRouter>
  );
}

export default App;
