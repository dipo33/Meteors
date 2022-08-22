import { formatNumber } from '../../utils/Formatting';

export interface MeteorOreProps {
  name: string;
  weight: number;
  proportion: number;
  amount: number;
}

const MeteorOre = (props: MeteorOreProps) => {
  return (
    <div className='meteor-item-card'>
      <img className='meteor-item-card__image' src={'/gtnh.png'} alt='logo' />
      <div className='meteor-item-card__content'>
        <h3 className='meteor-item-card__title'>{props.name}</h3>
        <div className='meteor-item-card__info'>
          <span className='meteor-item-card__info--highlight'>Weight – </span>
          <span>{props.weight}, </span>
          <span className='meteor-item-card__info--highlight'>Proportion – </span>
          <span>{props.proportion}%</span>
        </div>
        <div className='meteor-item-card__info'>
          <span>Meteor will contain roughly ~{formatNumber(props.amount)} blocks of this type</span>
        </div>
      </div>
    </div>
  );
};

export default MeteorOre;