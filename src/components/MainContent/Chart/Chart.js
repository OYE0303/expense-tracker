import { useState } from "react";
import ChartPic from "./ChartPic/ChartPic";
import ChartOption from "./ChartOption/ChartOption";
import Backdrop from "../../UI/Modal/Backdrop";
import BtnIcon from "../../UI/BtnIcon/BtnIcon";
import useCurWidth from "../../../Others/Custom/useCurWidth";
import styles from "./Chart.module.css";

function Chart() {
  const [chartData, setChartData] = useState();
  const [chartOptionModal, setChartOptionModal] = useState(false);
  const curWidth = useCurWidth();

  // need two seperate function
  function showChartOptionModalHandler() {
    setChartOptionModal(true);
  }
  function closeChartOptionModalHandler() {
    setChartOptionModal(false);
  }

  const classOptionContainer =
    curWidth <= 900 && chartOptionModal
      ? `${styles["option__container"]} ${styles["option__container--show"]} center`
      : `${styles["option__container"]}`;

  const classBtn =
    chartData === undefined
      ? `${styles.btn} capitalize`
      : `${styles.btn} capitalize ${styles["btn--chart"]} `;

  return (
    <div className={styles.chart}>
      {curWidth <= 900 && chartOptionModal && (
        <Backdrop
          onClick={closeChartOptionModalHandler}
          classBackdrop={styles.backdrop}
        />
      )}

      <div className={classOptionContainer}>
        <ChartOption
          closeChartOptionModalHandler={closeChartOptionModalHandler}
          setChartData={setChartData}
        />
      </div>

      {chartData === undefined ? (
        <div className={`${styles["chart__description"]} center--flex`}>
          <p className="capitalize">please input data to create graph</p>
        </div>
      ) : (
        <ChartPic className={styles["chart__pic"]} chartData={chartData} />
      )}

      {chartOptionModal || (
        <BtnIcon
          onClick={showChartOptionModalHandler}
          text="click to choose data"
          classBtn={classBtn}
          classText={styles["btn__text"]}
        >
          choose data
        </BtnIcon>
      )}
    </div>
  );
}

export default Chart;
