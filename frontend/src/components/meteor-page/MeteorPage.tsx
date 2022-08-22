import '../../styles/meteor.css';
import Meteor, { MeteorProps } from './Meteor';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

export interface MeteorPageProps {
  versionId: number;
}

const MeteorPage = ({ versionId }: MeteorPageProps) => {

  const [meteors, setMeteors] = useState<MeteorProps[]>([]);

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