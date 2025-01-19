let objNumbers = [1, 5, 6, 8, 10];

let stringNumbers = objNumbers.map((each) => each.toString());

console.log(stringNumbers);

type WeekdaysTypes = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
type DayTypes = Weekdays | 'Sat' | 'Sunday';

type NextDay = {
  [W in WeekdaysTypes]: DayTypes;
};

let nextDay: NextDay = {
  Mon: 'Tue',
  Tue: 'Wed',
  Wed: 'Thu',
  Thu: 'Fri',
  Fri: 'Sat',
};