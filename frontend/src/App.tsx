import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import MeteorPage from './components/meteor-page/MeteorPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MeteorPage />
    </BrowserRouter>
  );
}

export default App;
