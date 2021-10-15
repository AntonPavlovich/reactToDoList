import React from 'react';
import {format} from 'date-fns'

const SelectedDay = ({currentDay}) => {
  return (
    <div>
      <p>{format(currentDay,'eeee')}</p>
      <p>{format(currentDay,'d')}</p>
    </div>
  );
}

export default SelectedDay;
