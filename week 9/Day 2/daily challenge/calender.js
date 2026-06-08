import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedDay } from '../store/taskSlice';

function Calendar() {
  const dispatch = useDispatch();
  const selectedDay = useSelector(state => state.tasks.selectedDay);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    return { daysInMonth, startingDay, year, month };
  };

  const { daysInMonth, startingDay, year, month } = getDaysInMonth(currentMonth);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const handleDayClick = (day) => {
    const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    dispatch(setSelectedDay(date));
  };

  const isToday = (day) => {
    const today = new Date();
    return today.getFullYear() === year &&
           today.getMonth() === month &&
           today.getDate() === day;
  };

  const isSelected = (day) => {
    const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return date === selectedDay;
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth} className="calendar-btn">&lt;</button>
        <h2>{monthNames[month]} {year}</h2>
        <button onClick={handleNextMonth} className="calendar-btn">&gt;</button>
      </div>
      
      <div className="day-names">
        {dayNames.map(day => <span key={day}>{day}</span>)}
      </div>
      
      <div className="days-grid">
        {Array.from({ length: startingDay }).map((_, i) => (
          <span key={`empty-${i}`} className="day empty"></span>
        ))}
        
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          return (
            <span
              key={day}
              className={`day ${isSelected(day) ? 'selected' : ''} ${isToday(day) ? 'today' : ''}`}
              onClick={() => handleDayClick(day)}
            >
              {day}
            </span>
          );
        })}
      </div>
      
      <div className="selected-date">
        <p>Selected: <strong>{selectedDay}</strong></p>
      </div>
    </div>
  );
}

export default Calendar;