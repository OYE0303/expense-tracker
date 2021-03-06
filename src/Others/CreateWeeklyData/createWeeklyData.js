import createYearMonthDay from "../CreateYearMonthDay/createYearMonthDay";

const dateOptions = {
  weekday: "short",
};
/*
the reason adding "string" in the object
is because i want to prceisely get the data in certain range
for example, in the weekly overview and monthly overview

in the expense data, the time is string format, like this "2021-11-11"
and put this inside new Date("2011-11-11") will always get the date at 8:00 am

but inside this for-loop, currentDate is based on the current time which means the time will be different, no longer be 8:00 am, it could be 15:33, for example

so make both time to be string format, and put them inside new Date(), it could make sure the converted number time are the same

Unnecessary anymore
*/
function createWeeklyData(currentDate) {
  const dateArr = [];

  /*
  .setDate() will change the date object
  In order to avoid mutating the arguement date object, so we first copy the value of input
  (pure function)
  */
  const newCurrentDate = new Date(currentDate.getTime());

  /*
  newCurrentDate.getDate() - newCurrentDate.getDay() return the first day of the week
  For example, it's 01/26 WED (newCurrentDate)
  newCurrentDate.getDate() = 26, newCurrentDate.getDay() = 3
  26 - 3 = 23 -> first day of the week
  */
  for (let i = 0; i < 7; i++) {
    const date = new Date(
      newCurrentDate.setDate(
        newCurrentDate.getDate() - newCurrentDate.getDay() + i
      )
    );

    const [year, month, monthDay] = createYearMonthDay(date);

    dateArr.push({
      weekDay: new Intl.DateTimeFormat("en-US", dateOptions)
        .format(date)
        .toUpperCase(),
      monthDay,
      month,
      year,
      dateObj: date,
    });
  }

  return dateArr;
}

export default createWeeklyData;
