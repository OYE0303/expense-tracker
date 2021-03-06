import { useReducer, useContext } from "react";
import Title from "../../../UI/Title/Title";
import Button from "../../../UI/Button/Button";
import Card from "../../../UI/Card/Card";
import ChartOptionType from "./ChartOptionType/ChartOptionType";
import ChartOptionMainCategory from "./ChartOptionMainCategory/ChartOptionMainCategory";
import ChartOptionSubCategory from "./ChartOptionSubCategory/ChartOptionSubCategory";
import ChartOptionTime from "./ChartOptionTime/ChartOptionTime";
import CategoryContext from "../../../../store/category/category--context";
import BtnIcon from "../../../UI/BtnIcon/BtnIcon";
import { RiCloseCircleFill } from "react-icons/ri";
import styles from "./ChartOption.module.css";

function reducer(state, action) {
  switch (action.type) {
    case "MAIN_TYPE": {
      return { ...state, mainType: action.value };
    }

    case "STARTING_DATE": {
      return { ...state, startingDate: action.value };
    }

    case "ENDING_DATE": {
      return { ...state, endingDate: action.value };
    }

    case "TIME_DURATION": {
      return { ...state, timeDuration: action.value };
    }

    case "MAIN_CATEGORY": {
      let subCategoryArr = [];
      if (action.value === "income") subCategoryArr = state.categoryIncome;
      if (action.value === "expense") subCategoryArr = state.categoryExpense;

      return {
        ...state,
        mainCategory: action.value,
        subCategory: subCategoryArr,
      };
    }

    case "SUB_CATEGORY": {
      let subCategoryArr;
      // add
      if (action.check) {
        // first check if the items has been in the array(avoid duplicate)
        if (!state.subCategory.includes(action.value))
          subCategoryArr = [...state.subCategory, action.value];
      }

      // remove
      else {
        subCategoryArr = state.subCategory.filter(
          (element) => element !== action.value
        );
      }

      return {
        ...state,
        subCategory: subCategoryArr,
      };
    }

    default:
      return state;
  }
}

function ChartOption(props) {
  const { mainCategoryExpense, mainCategoryIncome } =
    useContext(CategoryContext);

  const initialObj = {
    mainType: "time",
    startingDate: "",
    endingDate: "",
    timeDuration: "7",
    mainCategory: "",
    subCategory: "",
    categoryExpense: mainCategoryExpense,
    categoryIncome: mainCategoryIncome,
  };

  const [chartData, dispatchChartData] = useReducer(reducer, initialObj);

  function submitFormHandler(e) {
    e.preventDefault();
    props.setChartData(chartData);

    // When chartOptionModal is opening, close it after submitting
    if (props.closeChartOptionModalHandler)
      props.closeChartOptionModalHandler();
  }

  let validIndex =
    chartData.mainType &&
    chartData.startingDate &&
    chartData.endingDate &&
    chartData.mainCategory &&
    chartData.mainCategory !== "net";

  // check box content may vary because different type of chart
  let checkboxContent = "";
  if (chartData.mainType === "time") {
    if (chartData.mainCategory === "income")
      checkboxContent = (
        <ChartOptionSubCategory
          category={chartData.categoryIncome}
          dispatchChartData={dispatchChartData}
          type="income"
        />
      );
    if (chartData.mainCategory === "expense")
      checkboxContent = (
        <ChartOptionSubCategory
          category={chartData.categoryExpense}
          dispatchChartData={dispatchChartData}
          type="expense"
        />
      );

    validIndex =
      chartData.mainType &&
      chartData.startingDate &&
      chartData.mainCategory &&
      (chartData.mainCategory === "net" || chartData.subCategory.length > 0);
  }

  return (
    <Card className={styles.card}>
      <BtnIcon
        classText={styles["btn__text"]}
        classBtn={styles.close}
        onClick={props.closeChartOptionModalHandler}
        text="close"
      >
        <RiCloseCircleFill />
      </BtnIcon>

      <form onSubmit={submitFormHandler} className={styles.form}>
        <div>
          <Title className={styles["form__title"]}>Analyize By</Title>

          <ChartOptionType
            mainType={chartData.mainType}
            dispatchChartData={dispatchChartData}
          />

          <div className={styles.scroll}>
            <ChartOptionTime
              classColor={chartData.mainType}
              dispatchChartData={dispatchChartData}
              valueStarting={chartData.startingDate}
              valueEnding={chartData.endingDate}
              mainType={chartData.mainType}
              optionMainType={chartData.mainType}
            />
            <ChartOptionMainCategory
              mainCategory={chartData.mainCategory}
              mainType={chartData.mainType}
              classColor={chartData.mainType}
              dispatchChartData={dispatchChartData}
            />
            {checkboxContent}
          </div>
        </div>

        <Button
          disabled={!validIndex}
          className={`${styles.btn} transition--25 ${
            !validIndex ? `btn--invalid` : `btn--valid`
          }`}
        >
          Show Chart
        </Button>
      </form>
    </Card>
  );
}

export default ChartOption;
