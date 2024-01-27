import React, { useState, useEffect } from 'react';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const daysOfMonth = () => {
    const kabisa = (yearIn) => (yearIn % 4 === 0 && yearIn % 100 !== 0 && yearIn % 400 !== 0) || (yearIn % 100 === 0 && yearIn % 400 === 0);
    const February = (yearIn) => (kabisa(yearIn) ? 29 : 28);
    return [31, February(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  };

  const weekDay = () => {
    let weekDayNum = new Date(year, selectedMonth).getDay();
    if (weekDayNum === 0) weekDayNum = 6;
    else weekDayNum -= 1;
    return weekDayNum;
  };

  const generateDays = () => {
    const generatedDays = [];
    for (let i = 1; i <= daysOfMonth()[selectedMonth]; i++) {
      if (generatedDays.length < weekDay()) {
        i -= i;
        generatedDays.push('');
        continue;
      }
      generatedDays.push(i);
    }
    return generatedDays;
  };

  const isToday = (day) => {
    const dayInTable = new Date(year, selectedMonth, day);
    return currentDate.toDateString() === dayInTable.toDateString();
  };

  const isSunday = (day) => {
    const dayInTable = new Date(year, selectedMonth, day);
    return dayInTable.getDay() === 0;
  };


  useEffect(() => {
    setSelectedMonth(currentDate.getMonth());
    setYear(currentDate.getFullYear());
  }, [currentDate]);

  return (
    <div className="bodycalendar">
      <div className="calendar">
        <div className="calendar__opts">
          <select
            name="calendar__month"
            id="calendar__month"
            value={monthNames[selectedMonth]}
            onChange={(e) => setSelectedMonth(monthNames.indexOf(e.target.value))}
          >
            {monthNames.map((month, index) => (
              <option key={index}>{month}</option>
            ))}
          </select>
          <select
            name="calendar__year"
            id="calendar__year"
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
          >
            {[2024,2025,2026,2027,2028,2029,2030].map((yearOption, index) => (
              <option key={index}>{yearOption}</option>
            ))}
          </select>
        </div>

        <div className="calendar__body">
          <div className="calendar__days">
            {dayNames.map((day, index) => (
              <div key={index}>{day}</div>
            ))}
          </div>

          <div className="calendar__dates">
            {generateDays().map((day, dayIndex) => (
              <div
                key={dayIndex}
                className={`calendar__date ${day === '' ? 'calendar__date--grey' : ''} ${
                  isToday(day) ? 'calendar__date--selected' : ''
                } ${isSunday(day) ? 'calendar__date--sunday' : ''}`}
              >
                <span>{day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
