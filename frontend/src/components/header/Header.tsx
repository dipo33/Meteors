import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='logo' src={'/gtnh.png'} alt='logo' />
      </Link>
      <ul className='main-nav'>
        <li className='main-nav__item'>
          <Link className='main-nav__item--highlight' to='/'>GregTech: New Horizons – </Link>
          <span className='main-nav__item--selected'>Meteors</span>
        </li>
        <li className='main-nav__item'>
          <span className='main-nav__item--highlight'>Version: </span>
          <span className='main-nav__item--selected'>2.1.2.4-27-pre</span>
        </li>
      </ul>
    </header>
  );
};

export default Header;