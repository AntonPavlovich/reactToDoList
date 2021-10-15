import React, { useState } from 'react';
import SelectedDay from './SelectedDay/SelectedDay';
import CalendarBody from './CalendarBody/CalendarBody';

const Calendar = () => {

  const [currentDay, setCurrentDay] = useState(new Date())

  return (
    <div>
      <SelectedDay currentDay={currentDay}/>
      <CalendarBody currentDay={currentDay}/>
    </div>
  );
}

export default Calendar;
