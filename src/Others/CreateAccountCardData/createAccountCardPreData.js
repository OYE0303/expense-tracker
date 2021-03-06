import createWeeklyData from "../CreateWeeklyData/createWeeklyData";
import createDateStringFormat from "../CreateDateStringFormat/CreateDateStringFormat";
import createYearMonthDay from "../CreateYearMonthDay/createYearMonthDay";

function createAccountCardPreData(type, date) {
  if (type === "week") {
    const labels = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];

    const weeklyDataArr = createWeeklyData(date);
    const startingDateOfWeek = weeklyDataArr[0];
    const endingDateOfWeek = weeklyDataArr[weeklyDataArr.length - 1];

    const startingDateOfWeekStr = createDateStringFormat(
      startingDateOfWeek.dateObj
    );
    const endingDateOfWeekStr = createDateStringFormat(
      endingDateOfWeek.dateObj
    );

    return [
      startingDateOfWeek.dateObj,
      endingDateOfWeek.dateObj,
      startingDateOfWeekStr,
      endingDateOfWeekStr,
      labels,
    ];
  } else {
    const [year, month] = createYearMonthDay(date);
    const startingDateOfMonth = new Date(year, month - 1, 1); // last 1 gives us the next month of first day, now it's give us the first day of current month
    const endingDateOfMonth = new Date(year, month, 0);

    const startingDateOfMonthStr = createDateStringFormat(startingDateOfMonth);
    const endingDateOfMonthStr = createDateStringFormat(endingDateOfMonth);

    return [
      startingDateOfMonth,
      endingDateOfMonth,
      startingDateOfMonthStr,
      endingDateOfMonthStr,
    ];
  }
}

export default createAccountCardPreData;
