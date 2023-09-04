import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/twitter-logo.svg';
import Icons from '..';
import Button from '../buttons/button';

const sidebar = () => {
  const NavLink = Icons.map(icon => {
    return (
      <Link
        to={icon.link}
        className="w-full h-[3.125rem] mt-[0.5rem] flex items-center"
        key={icon.src}
      >
        <img className="w-[24px] h-[24px] m-[0.81rem]" src={icon.src} alt={icon.name} />
        {icon.name}
      </Link>
    );
  });

  return (
    <div className="w-[17.1875rem] h-full flex flex-col items-center font-sfpro text-[#D9D9D9] text-[1.1875rem] font-bold border-r border-[#2F3336]">
      <ul className="w-[251px] h-[514px]">
        <div className="w-full h-[3.125rem] flex items-center">
          <img className="m-[0.81rem]" src={Logo} alt="Twitter Logo" />
        </div>

        {NavLink}
      </ul>

      <Button w="w-[14.0625rem]" h="h-[3.25rem]" fSize="text-[1.0625rem]" mt="mt-[1rem]" />
    </div>
  );
};

export default sidebar;
