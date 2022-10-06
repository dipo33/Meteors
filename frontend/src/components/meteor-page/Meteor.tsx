import MeteorOre from './MeteorOre';
import { useState } from 'react';
import { localize } from '../../utils/Localization';
import { formatNumber, formatText } from '../../utils/Formatting';
import { imageOnError } from '../../utils/Utils';

export interface MeteorProps {
  id: number;
  name: string;
  cost: number;
  radius: number;
  catalyst: string;
  ores: {
    name: string;
    displayName: string;
    weight: number;
  }[];
}

const Meteor = (props: MeteorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toTexturePath = (unlocalizedName: string) => {
    return `textures/catalyst/${unlocalizedName.replaceAll(':', '--')}.png`;
  };

  const dropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const computeOres = (ores: MeteorProps['ores']) => {
    let total = 0;
    ores.forEach((ore) => {
      total += ore.weight;
    });

    return ores.map((ore) => {
      return {
        name: ore.name,
        displayName: ore.displayName,
        weight: ore.weight,
        proportion: Math.ceil(ore.weight / total * 1000) / 10,
        amount: Math.ceil(3 / 4 * Math.PI * Math.pow(props.radius, 3) / total * ore.weight),
      };
    });
  };

  return (<div className='meteor-card'>
    <div className='meteor-card__top'>
      <div className='meteor-card__image-holder'>
        <img className='meteor-card__image' src={toTexturePath(props.catalyst)} onError={imageOnError} alt='logo' />
      </div>
      <div className='meteor-card__content'>
        <h2 className='meteor-card__title'>{formatText(props.name)}</h2>
        <div className='meteor-card__info'>
          <span className='meteor-card__info--highlight'>Cost – </span>
          <span>{formatNumber(props.cost)} LP</span>
        </div>
        <div className='meteor-card__info'>
          <span className='meteor-card__info--highlight'>Radius – </span>
          <span>{props.radius} blocks</span>
        </div>
        <div className='meteor-card__info --text-indent'>
          <span className='meteor-card__info--highlight'>Catalyst – </span>
          <span>{localize(props.catalyst)}</span></div>
      </div>
      <button onClick={dropdownClick}
              className={`meteor-card__dropdown ${isOpen ? 'meteor-card__dropdown--active' : ''}`}>
        <img className='meteor-card__dropdown-icon' src='assets/dropdown.svg' alt='dropdown button' />
      </button>
    </div>
    {isOpen && (<>
      <hr className='meteor-card__divider' />
      <div className='meteor-card__bottom'>
        {
          computeOres(props.ores).map((ore, index) => (
            <MeteorOre key={index} name={ore.name} displayName={ore.displayName} weight={ore.weight}
                       proportion={ore.proportion}
                       amount={ore.amount} />
          ))
        }
      </div>
    </>)}
  </div>);
};

export default Meteor;