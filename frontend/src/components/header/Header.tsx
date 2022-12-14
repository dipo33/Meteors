import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export interface HeaderProps {
  setVersionId: (versionId: number) => void;
}

type Version = {
  id: number;
  name: string;
  createdAt: Date;
}

const Header = ({ setVersionId }: HeaderProps) => {
  const [versions, setVersions] = useState<Version[]>([]);

  useEffect(() => {
    axios.get('/versions')
      .then(response => {
        if (response.status === 200) {
          setVersions(response.data.map((version: any) => ({ ...version, createdAt: new Date(version.createdAt) })));
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
      <div className='main-nav'>
        <div className='main-nav__item'>
          <h1>
            <Link className='main-nav__item--highlight' to='/'>GregTech: New Horizons – </Link>
            <span className='main-nav__item--selected'>Meteors</span>
          </h1>
        </div>
        <div className='main-nav__item'>
          <span className='main-nav__item--highlight'>Version: </span>
          <select className='main-nav__version-select' onChange={onVersionChange} name='versions'>
            {
              versions
                .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
                .map((version, index) => (
                  <option key={index} value={version.id}>{version.name} </option>
                ))
            }
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;