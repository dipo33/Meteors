import '../../styles/meteor.css';

const MeteorPage = () => {
  return (
    <main className='main-content'>
      <div className='meteor-card'>
        <div className='meteor-card__top'>
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
          <button className='meteor-card__dropdown'>
            <img className='meteor-card__dropdown-icon' src='dropdown.svg' alt='dropdown button' />
          </button>
        </div>
        <hr className='meteor-card__divider' />
        <div className='meteor-card__bottom'>
          <div className='meteor-item-card'>
            <img className='meteor-item-card__image' src={'/gtnh.png'} alt='logo' />
            <div className='meteor-item-card__content'>
              <h3 className='meteor-item-card__title'>A Block of Kevin Flesh</h3>
              <div className='meteor-item-card__info'>
                <span className='meteor-item-card__info--highlight'>Weight – </span>
                <span>50, </span>
                <span className='meteor-item-card__info--highlight'>Proportion – </span>
                <span>27%</span>
              </div>
              <div className='meteor-item-card__info'>
                <span>Meteor will contain roughly ~1k blocks of this type</span>
              </div>
            </div>
          </div>
          <div className='meteor-item-card'>
            <img className='meteor-item-card__image' src={'/gtnh.png'} alt='logo' />
            <div className='meteor-item-card__content'>
              <h3 className='meteor-item-card__title'>A Block of Kevin Flesh</h3>
              <div className='meteor-item-card__info'>
                <span className='meteor-item-card__info--highlight'>Weight – </span>
                <span>50, </span>
                <span className='meteor-item-card__info--highlight'>Proportion – </span>
                <span>27%</span>
              </div>
              <div className='meteor-item-card__info'>
                <span>Meteor will contain roughly ~1k blocks of this type</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MeteorPage;