// Author: Justin Miller
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let year = 0;
  let dayOfYear = 0;
  let month = 0;
  let day = 0;
  for (let i = 0; i < 4; i++) {
    // Gets Year
    year += date[i];
  }
  year = Number(year);
  if (year % 4 === 0 && year % 100 !== 0) {
    // Is Leap Year
    months[1] = 29;
  }
  for (let i = 5; i < 7; i++) {
    // Gets Month
    month += date[i];
  }
  month = Number(month - 1);
  for (let i = 8; i < 10; i++) {
    // Gets Day
    day += date[i];
  }
  day = Number(day);
  for (let i = 0; i < month; i++) {
    // Adds months to dayOfYear
    dayOfYear += months[i];
  }
  dayOfYear += day; // Adds days to dayOfYear
  return dayOfYear;
};
