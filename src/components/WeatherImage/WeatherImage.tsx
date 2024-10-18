import { ReactNode } from 'react';
import { IoMdPartlySunny, IoMdRainy } from 'react-icons/io';
import { MdCloud, MdFoggy,MdSunny } from 'react-icons/md';

export const WeatherImage = (weather: string) => {
  let imageElement: ReactNode;
  let imageColor: string;

  switch (weather) {
    case 'Rain':
      imageElement = <IoMdRainy />;
      imageColor = '#496a8a';
      break;
    case 'Clear':
      imageElement = <MdSunny data-testid="MdSunny" />;
      imageColor = '#f6de7e';
      break;
    case 'Clouds':
      imageElement = <MdCloud />;
      imageColor = '#496a8a';
      break;
    case 'Mist':
      imageElement = <MdFoggy />;
      imageColor = '#586c7f';
      break;
    default:
      imageElement = <IoMdPartlySunny />;
      imageColor = '#496a8a';
  }

  return <span style={{ color: imageColor }}>{imageElement}</span>;
};
