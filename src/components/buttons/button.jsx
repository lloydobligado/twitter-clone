import React from 'react';

const button = ({ w, h, fSize, mt }) => {
  return (
    <button className={`${w} ${h} ${fSize} ${mt} bg-[#1D9BF0] rounded-[52px] font-bold`}>
      Tweet
    </button>
  );
};

export default button;
