import style from "./ExpenseListModal.module.css";
import ExpenseList from "../ExpenseList/ExpenseList";
import SubTitle from "../SubTitle/SubTitle";
import Button from "../Button/Button";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import Modal from "../Modal/Modal";

function ExpenseListModal(props) {
  let scrollClassName = null;
  if (props.expenseDataList.length > 6) scrollClassName = "scroll";

  function addClickHandler() {
    props.expenseListModalToggler();
    props.addDataFormModalToggler();
  }

  let mainContent =
    props.expenseDataList.length === 0 ? (
      <SubTitle className={`${style.empty} uppercase`}>no data</SubTitle>
    ) : (
      <ExpenseList
        classItem={
          scrollClassName
            ? `${style.list} ${style[scrollClassName]}`
            : `${style.list}`
        }
        data={props.expenseDataList}
        modal={true}
        inDeleteSection={false}
      />
    );

  return (
    <Modal onClick={props.expenseListModalToggler} classModal={style.modal}>
      <SubTitle className={style.title}>{props.selectedDate}</SubTitle>
      <HorizontalLine />
      <div className={style["list__container"]}>{mainContent}</div>

      <div className={style["btn__container"]}>
        <Button
          onClick={props.expenseListModalToggler}
          type="button"
          className={`${style.btn} transition--25`}
        >
          back
        </Button>

        <Button
          onClick={addClickHandler}
          type="button"
          className={`${style.btn} transition--25`}
        >
          add data
        </Button>
      </div>
    </Modal>
  );
}

export default ExpenseListModal;
