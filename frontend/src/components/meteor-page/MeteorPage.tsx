import '../../styles/meteor.css';
import Meteor, { MeteorProps } from './Meteor';
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import ErrorBox, { ErrorBoxProps } from './ErrorBox';
import { formatText } from '../../utils/Formatting';

export interface MeteorPageProps {
  versionId: number;
}

const MeteorPage = ({ versionId }: MeteorPageProps) => {

  const [meteors, setMeteors] = useState<MeteorProps[]>([]);
  const [filtered, setFiltered] = useState<MeteorProps[]>([]);
  const [error, setError] = useState<ErrorBoxProps | null>(null);

  useEffect(() => {
    axios
      .get(`/versions/${versionId}/meteors`)
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          const remapped = remapMeteors(response.data);
          setMeteors(remapped);
          setFiltered(remapped);
        }
      })
      .catch((error) => {
        setError({ error: error.name, description: error.message });
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
            displayName: formatText(item.name),
            weight: item.weight,
          };
        }),
      };
    });
  };


  const onFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filter = event.target.value.toLowerCase();
    const filtered = meteors.filter(
      (meteor) => meteor.ores.some((ore) => ore.displayName.toLowerCase().includes(filter)),
    ).map((meteor) => {
        return {
          ...meteor, ores: meteor.ores.map((ore => {
            return { ...ore, filtered: filter.length > 0 && ore.displayName.toLowerCase().includes(filter) };
          })),
        };
      },
    ).map((meteor) => {
      return {
        ...meteor,
        ores: meteor.ores.filter((ore) => ore.filtered).concat(
          meteor.ores.filter((ore) => !ore.filtered)),
      };
    });

    setFiltered(filtered);
  };

  return (
    <main className='main-content'>
      <div className='main-filter'>
        <span className='--highlight'>Filter by Ore:</span>
        <input className='main-filter__input' type='text' onChange={onFilterChange} />
      </div>
      {!error &&
        filtered.map((meteor) => (
          <Meteor key={meteor.id} {...meteor} />
        ))
      }
      {
        filtered.length === 0 && meteors.length > 0 && !error && (
          <span className='no-result'>No results</span>
        )
      }
      {error &&
        <ErrorBox {...error} />
      }
    </main>
  );
};

export default MeteorPage;