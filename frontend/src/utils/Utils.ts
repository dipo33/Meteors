import { SyntheticEvent } from 'react';


export const imageOnError = (event: SyntheticEvent<HTMLImageElement>) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = 'gtnh.png';
};