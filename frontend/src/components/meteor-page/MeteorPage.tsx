import '../../styles/meteor.css';
import Meteor from './Meteor';

const MeteorPage = () => {
  return (
    <main className='main-content'>
      <Meteor
        name={'The Greatest Meteor'} cost={570000} radius={18}
        catalyst={'IV Mass Fabricator'} ores={[
        {
          name: 'A Block of Kevin Flesh',
          weight: 70,
        },
        {
          name: 'A Block of Kevin Blood',
          weight: 30,
        },
      ]} />
      <Meteor
        name={'The Worst Meteor'} cost={1000000} radius={4}
        catalyst={'Dirt'} ores={[
        {
          name: 'A Block of Dirt',
          weight: 10,
        },
      ]} />
    </main>
  );
};

export default MeteorPage;