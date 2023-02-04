/* eslint-disable no-tabs */
/* eslint-disable react/require-default-props */
import React from 'react';

type Props = {
	className?: string;
};

const ButtonCircle = ({ className }: Props) => (
  <button className={className || ''} type="button">
    

    
    <svg>
      <circle
        className="timer__background"
        cx="20"
        cy="20"
        r="19"
      />
      <circle className="timer__progress" cx="20" cy="20" r="19" />
    </svg>
  </button>
);

export default ButtonCircle;
