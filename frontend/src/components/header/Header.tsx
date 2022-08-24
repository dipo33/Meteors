import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export interface HeaderProps {
  setVersionId: (versionId: number) => void;
}

type Version = {
  id: number;
  name: string;
}

const Header = ({ setVersionId }: HeaderProps) => {
  const [versions, setVersions] = useState<Version[]>([]);

  useEffect(() => {
    axios.get('/versions')
      .then(response => {
        if (response.status === 200) {
          setVersions(response.data);
        }
      })
      .catch(error => {
        // TODO: Add proper error handling
        console.log(error);
      });
  }, []);

  const onVersionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setVersionId(Number(event.target.value));
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='logo' src={'assets/gtnh.png'} alt='logo' />
      </Link>
      <ul className='main-nav'>
        <li className='main-nav__item'>
          <Link className='main-nav__item--highlight' to='/'>GregTech: New Horizons – </Link>
          <span className='main-nav__item--selected'>Meteors</span>
        </li>
        <li className='main-nav__item'>
          <span className='main-nav__item--highlight'>Version: </span>
          <select className='main-nav__version-select' onChange={onVersionChange} name='versions'>
            {
              versions.map((version, index) => (
                <option key={index} value={version.id}>{version.name}</option>
              ))
            }
          </select>
        </li>
      </ul>
    </header>
  );
};

export default Header;