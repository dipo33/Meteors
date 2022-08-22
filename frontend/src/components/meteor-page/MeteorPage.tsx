import '../../styles/meteor.css';
import Meteor, { MeteorProps } from './Meteor';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

const MeteorPage = () => {

  const [meteors, setMeteors] = useState<MeteorProps[]>([]);

  useEffect(() => {
    axios
      .get(`/versions/${1}/meteors`)
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          setMeteors(remapMeteors(response.data));
        }
      })
      .catch((error) => {
        // TODO: Add proper error handling
        console.error(error);
      });
  });

  const remapMeteors = (meteors: any[]) => {
    return meteors.map((meteor: any) => {
      return {
        name: meteor.name,
        cost: meteor.cost,
        radius: meteor.radius,
        catalyst: 'Placeholder Catalyst',
        ores: meteor.items.map((item: any) => {
          return {
            name: item.name,
            weight: item.weight,
          };
        }),
      };
    });
  };

  return (
    <main className='main-content'>
      {
        meteors.map((meteor: MeteorProps, index) => (
          <Meteor key={index} {...meteor} />
        ))
      }
    </main>
  );
};

export default MeteorPage;