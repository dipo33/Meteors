import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import MeteorPage from './components/meteor-page/MeteorPage';
import axios from 'axios';
import { useState } from 'react';

function App() {
  axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

  const [versionId, setVersionId] = useState(1);

  return (
    <BrowserRouter>
      <Header setVersionId={setVersionId} />
      <MeteorPage versionId={versionId} />
    </BrowserRouter>
  );
}

export default App;
