import '../../styles/meteor.css';
import Meteor, { MeteorProps } from './Meteor';
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

export interface MeteorPageProps {
  versionId: number;
}

const MeteorPage = ({ versionId }: MeteorPageProps) => {

  const [meteors, setMeteors] = useState<MeteorProps[]>([]);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    axios
      .get(`/versions/${versionId}/meteors`)
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          setMeteors(remapMeteors(response.data));
        }
      })
      .catch((error) => {
        // TODO: Add proper error handling
        console.error(error);
      });
  }, [versionId]);

  const remapMeteors = (meteors: any[]) => {
    return meteors.map((meteor: any) => {
      return {
        id: meteor.id,
        name: meteor.name,
        cost: meteor.cost,
        radius: meteor.radius,
        catalyst: meteor.catalyst,
        ores: meteor.items.map((item: any) => {
          return {
            name: item.name,
            weight: item.weight,
          };
        }),
      };
    });
  };


  const onFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value.toLowerCase());
  };

  return (
    <main className='main-content'>
      <div className='main-filter'>
        <span className='--highlight'>Filter by Ore:</span>
        <input className='main-filter__input' type='text' onChange={onFilterChange} />
      </div>
      {
        meteors.filter((meteor: MeteorProps) =>
          (meteor.ores.some(ore => ore.name.toLowerCase().includes(filter.toLowerCase()))),
        ).map((meteor) => (
          <Meteor key={meteor.id} {...meteor} />
        ))
      }
    </main>
  );
};

export default MeteorPage;