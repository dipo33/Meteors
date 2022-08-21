import '../../styles/meteor.css';

const MeteorPage = () => {
  return (
    <main className='main-content'>
      <div className='meteor-card'>
        <img className='meteor-card__image' src={'/gtnh.png'} alt='logo' />
        <div className='meteor-card__content'>
          <h2 className='meteor-card__title'>The Greatest Meteor</h2>
          <div className='meteor-card__info'>
            <span className='meteor-card__info--highlight'>Cost – </span>
            <span>540 000 LP</span>
          </div>
          <div className='meteor-card__info'>
            <span className='meteor-card__info--highlight'>Radius – </span>
            <span>18 blocks</span>
          </div>
          <div className='meteor-card__info'>
            <span className='meteor-card__info--highlight'>Catalyst – </span>
            <span>IV Mass Fabricator</span></div>
        </div>
      </div>
    </main>
  );
};

export default MeteorPage;