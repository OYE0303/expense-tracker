import { useContext, useState, useEffect } from "react";
import CardChartSection from "../../../UI/CardChartSection/CardChartSection";
import UpdateStateContext from "../../../../store/updateState/updateState--context";
import ExpenseDataContext from "../../../../store/expenseData/expenseData--context";
import CategoryContext from "../../../../store/category/category--context";
import DisplayThemeContext from "../../../../store/displayTheme/displayTheme--context";
import createAccountCardPreData from "../../../../Others/CreateAccountCardData/createAccountCardPreData";
import createSmallChartData from "../../../../Others/CreateAccountCardData/createSmallChartData";
import styles from "./MonthlyInfo.module.css";
import fetcher from "../../../../Others/Fetcher/fetcher";

function MonthlyInfo(props) {
  const [accInfo, setAccInfo ] = useState({
    income: 0,
    expense: 0,
    balance: 0,
  });
  const { expenseData } = useContext(ExpenseDataContext);
  const { categoryExpense } = useContext(CategoryContext);
  const { displayTheme } = useContext(DisplayThemeContext);
  const { updateState } = useContext(UpdateStateContext);

  const [startingDateObj, endingDateObj, startingDateString, endingDateString] = createAccountCardPreData("month", props.month);

  useEffect(() => {
    fetchTransactionInfo(startingDateString, endingDateString)
    .then((data) => {
      setAccInfo({
        income: data.total_income,
        expense: data.total_expense,
        balance: data.total_balance
      })
    }).catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, [startingDateString, endingDateString, updateState])

  const [configBar, configPie] = createSmallChartData(
    expenseData,
    "30",
    startingDateString,
    endingDateString,
    categoryExpense,
    displayTheme
  );

  return (
    <div className={styles.monthly}>
      <CardChartSection
        title="Monthly Overview"
        income={accInfo.income}
        expense={accInfo.expense}
        netIncome={accInfo.balance}
        configBar={configBar}
        configPie={configPie}
        startingDateString={startingDateString}
        endingDateString={endingDateString}
        barChartTimeRange="one_month"
      />
    </div>
  );
}

export default MonthlyInfo;


async function fetchTransactionInfo(startDate, endDate){
  try {
    const resp = await fetcher(`v1/transaction/info?start_date=${startDate}&end_date=${endDate}`, "GET");

    return resp
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}