import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import MeteorPage from './components/meteor-page/MeteorPage';
import axios from 'axios';
import { useState } from 'react';

function App() {
  axios.defaults.baseURL = 'http://localhost:3000';

  const [versionId, setVersionId] = useState(0);

  return (
    <BrowserRouter>
      <Header setVersionId={setVersionId} />
      <MeteorPage versionId={versionId} />
    </BrowserRouter>
  );
}

export default App;
