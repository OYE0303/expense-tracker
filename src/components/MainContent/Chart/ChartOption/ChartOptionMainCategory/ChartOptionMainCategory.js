import SubTitle from "../../../../UI/SubTitle/SubTitle";
import InputRadio from "../../../../UI/InputRadio/InputRadio";
import style from "./ChartOptionMainCategory.module.css";

function ChartOptionMainCategory(props) {
  function changeRadioHandler(e) {
    props.dispatchChartData({ type: "MAIN_CATEGORY", value: e.target.value });
  }

  return (
    <div className={style.container}>
      <SubTitle
        className={
          props.classColor === "time"
            ? `${style["subtitle--time"]}`
            : `${style["subtitle--category"]}`
        }
      >
        Select Data
      </SubTitle>
      <div className={style["input__container"]}>
        <InputRadio
          classContainer={style["radio__container"]}
          classCheck={`${style.check} center--flex`}
          classLabel={`${style.label} capitalize`}
          classInput={style.input}
          classInside={style.inside}
          value="income"
          id="income"
          name="data"
          label="income"
          checked={props.mainCategory === "income"}
          onChange={changeRadioHandler}
        />
        <InputRadio
          classContainer={style["radio__container"]}
          classCheck={`${style.check} center--flex`}
          classLabel={`${style.label} capitalize`}
          classInput={style.input}
          classInside={style.inside}
          value="expense"
          id="expense"
          name="data"
          label="expense"
          checked={props.mainCategory === "expense"}
          onChange={changeRadioHandler}
        />
        {/* Reference 1 */}
        {props.mainType !== "category" && (
          <InputRadio
            classContainer={style["radio__container"]}
            classCheck={`${style.check} center--flex`}
            classLabel={`${style.label} capitalize`}
            classInput={style.input}
            classInside={style.inside}
            value="net"
            id="net"
            name="data"
            label="net income"
            checked={props.mainCategory === "net"}
            onChange={changeRadioHandler}
          />
        )}
      </div>
    </div>
  );
}

export default ChartOptionMainCategory;
/*
Referecne 1
When user choose use pie chart to analyze,
don't need to show net income
*/
