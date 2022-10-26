import { formatNumber } from '../../utils/Formatting';
import { imageOnError } from '../../utils/Utils';
import StringMatch from './StringMatch';

export interface MeteorOreProps {
  name: string;
  displayName: string;
  weight: number;
  proportion: number;
  amount: number;
  filter: string;
}

const MeteorOre = (props: MeteorOreProps) => {

  const toTexturePath = (unlocalizedName: string) => {
    return `textures/ore/${unlocalizedName}.png`;
  };

  return (
    <div className='meteor-item-card'>
      <div className='meteor-item-card__image-holder'>
        <img className='meteor-item-card__image' src={toTexturePath(props.name)} onError={imageOnError} alt='logo' />
      </div>
      <div className='meteor-item-card__content'>
        <StringMatch text={props.displayName} filter={props.filter} />
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