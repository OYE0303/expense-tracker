import { useRef, useEffect, useState, useContext } from "react";
import Title from "../../../UI/Title/Title";
import ExpenseDataContext from "../../../../store/expenseData/expenseData--context";
import Card from "../../../UI/Card/Card";
import Select from "../../../UI/Select/Select";
import style from "./AccountSmallChart.module.css";
import Chart from "chart.js/auto";

function AccountSmallChart() {
  const { expenseData, categoryExpense } = useContext(ExpenseDataContext);
  const [smallChartType, setSmallChartType] = useState("category");
  const chartRef = useRef(null);

  const filteredData = expenseData.filter(
    (element) => element.category === "expense"
  );

  useEffect(() => {
    const [labels, data] = createLabelData(smallChartType, filteredData);

    const configBar = {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "",
            data: data,
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgb(255, 99, 132,0.2)",
              "rgb(255, 205, 86,0.2)",
            ],
            borderColor: [
              "rgb(54, 162, 235)",
              "rgb(255, 99, 132)",
              "rgb(255, 205, 86)",
            ],
            borderWidth: 1,
            pointBackgroundColor: ["rgb(54, 162, 235)"],
          },
        ],
      },
      options: {
        indexAxis: "y",
      },
    };

    const chart = new Chart(chartRef.current, configBar);

    return function cleanUp() {
      chart.destroy();
    };
  }, [smallChartType, categoryExpense, filteredData]);

  function selectChangeHandler(e) {
    setSmallChartType(e.target.value);
  }

  return (
    <Card className={style["chart__section"]}>
      <Title className={style.title}>Chart</Title>
      <Select onChange={selectChangeHandler}>
        <option value="category">which category expense the most</option>
        <option value="day">which day expense the most</option>
        <option value="month">which month expense the most</option>
      </Select>
      <div>
        <canvas ref={chartRef} height="200" width="auto"></canvas>
      </div>
    </Card>
  );
}

export default AccountSmallChart;

// return labels and data according to diff type of chart
function createLabelData(type, expensData) {
  let labels, data;
  if (type === "category") [labels, data] = createDataCategory(expensData);

  if (type === "day") [labels, data] = createDataDay(expensData);

  if (type === "month") [labels, data] = createDataMonth(expensData);

  return [labels, data];
}

function createCacheTable(expensData) {
  const cacheTableCategory = {};
  const cacheTableDay = new Array(7).fill(0);
  const cacheTableMonth = new Array(12).fill(0);

  // create three diff tables in O(n) time
  expensData.forEach((data) => {
    if (cacheTableCategory[data.mainCate] !== undefined) {
      cacheTableCategory[data.mainCate] += Number(data.price);
    } else cacheTableCategory[data.mainCate] = Number(data.price);

    cacheTableMonth[Number(data.month) - 1] += Number(data.price);
    cacheTableDay[new Date(data.time).getDay()] += Number(data.price);
  });

  return [cacheTableCategory, cacheTableDay, cacheTableMonth];
}

function createDataCategory(expenseData) {
  const labels = ["", "", ""];
  const data = [0, 0, 0];
  const [cacheTable] = createCacheTable(expenseData);

  for (const [key, value] of Object.entries(cacheTable)) {
    if (value > data[0]) {
      data[0] = value;
      labels[0] = key;
      continue;
    }
    if (value <= data[0] && value > data[1]) {
      data[1] = value;
      labels[1] = key;
      continue;
    }
    if (value <= data[1] && value > data[2]) {
      data[2] = value;
      labels[2] = key;
      continue;
    }
  }

  return [labels, data];
}

function createDataDay(expenseData) {
  const labels = ["", "", ""];
  const data = [0, 0, 0];
  const dayArr = ["MON", "TUE", "WED", "THR", "FRI", "SUN", "SAT"];
  const [, cacheTableDay] = createCacheTable(expenseData);

  for (let i = 0; i < cacheTableDay.length; i++) {
    const value = cacheTableDay[i];

    if (value > data[0]) {
      data[0] = value;
      labels[0] = `${dayArr[i]}`;
      continue;
    }
    if (value <= data[0] && value > data[1]) {
      data[1] = value;
      labels[1] = `${dayArr[i]}`;
      continue;
    }
    if (value <= data[1] && value > data[2]) {
      data[2] = value;
      labels[2] = `${dayArr[i]}`;
      continue;
    }
  }

  return [labels, data];
}

function createDataMonth(expenseData) {
  const labels = ["", "", ""];
  const data = [0, 0, 0];
  const monthArr = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const [, , cacheTableMonth] = createCacheTable(expenseData);

  for (let i = 0; i < cacheTableMonth.length; i++) {
    const value = cacheTableMonth[i];

    if (value > data[0]) {
      data[0] = value;
      labels[0] = `${monthArr[i]}`;
      continue;
    }
    if (value <= data[0] && value > data[1]) {
      data[1] = value;
      labels[1] = `${monthArr[i]}`;
      continue;
    }
    if (value <= data[1] && value > data[2]) {
      data[2] = value;
      labels[2] = `${monthArr[i]}`;
      continue;
    }
  }

  return [labels, data];
}

/*
function createDataCategory(categoryExpense, expensData) {
  const labels = ["", "", ""];
  const data = [0, 0, 0];
  for (const key of Object.keys(categoryExpense)) {
    const amount = createTotalAmount(expensData, "mainCate", key);

    // 1st amount
    if (amount > data[0]) {
      data[0] = amount;
      labels[0] = `${key}`;
      continue;
    }

    // 2nd amount
    if (amount <= data[0] && amount > data[1]) {
      data[1] = amount;
      labels[1] = `${key}`;
      continue;
    }

    // 3rd amount
    if (amount <= data[1] && amount > data[2]) {
      data[2] = amount;
      labels[2] = `${key}`;
      continue;
    }
  }

  return [labels, data];
}

function createTotalAmount(expenseData, comparisonA, comparisonB) {
  return expenseData
    .filter((element) => element[comparisonA] === comparisonB)
    .reduce((acc, cur) => acc + Number(cur.price), 0);
}
*/
