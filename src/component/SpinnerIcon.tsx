import React from 'react';
import Spinner from './Spinner';

const SpinnerIcon = (props:any) => {

  return (
    <div className="Spinner" data-testid="spinner"
    style={{alignItems:"center"}}>
      <Spinner />
      </div>

  );
  
};

export default SpinnerIcon;
