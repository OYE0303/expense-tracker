import { useReducer, useContext } from "react";
import Modal from "../Modal/Modal";
import Title from "../Title/Title";
import Button from "../Button/Button";
import InputText from "../InputText/InputText";
import InputRadio from "../InputRadio/InputRadio";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import CategoryContext from "../../../store/category/category--context";
import EditModalContext from "../../../store/editModal/editModal--context";
import Warning from "../Warning/Warning";
import styles from "./AddMainCategoryModal.module.css";

function reducer(state, action) {
  switch (action.type) {
    case "NAME": {
      const isDuplicate = state.categoryNameArr.includes(action.value);
      const inputValid = action.value.trim().length > 0 && !isDuplicate;

      return {
        ...state,
        name: action.value,
        inputValid,
        isDuplicate,
        isValid: inputValid && state.iconIndex,
      };
    }

    case "ICON": {
      return {
        ...state,
        iconIndex: action.value,
        isValid: state.inputValid && action.value,
      };
    }

    case "TOUCH": {
      return { ...state, isTouch: true };
    }

    default: {
      return state;
    }
  }
}

function AddMainCategoryModal(props) {
  const { addMainCategory, iconArr, mainCategoryExpense, mainCategoryIncome } =
    useContext(CategoryContext);
  const [_, setEditModal] = useContext(EditModalContext);

  // Reference 4
  const categoryNameArr =
    props.type === "expense" ? mainCategoryExpense : mainCategoryIncome;

  const [form, formDispatch] = useReducer(reducer, {
    name: "",
    iconIndex: false,
    isValid: false,
    inputValid: false,
    isDuplicate: false,
    isTouch: false,
    categoryNameArr,
  });

  function inputTextTouchHandler() {
    formDispatch({ type: "TOUCH" });
  }

  function inputTextChangeHandler(e) {
    formDispatch({ type: "NAME", value: e.target.value });
  }

  function radioIconChangeHandler(e) {
    formDispatch({ type: "ICON", value: e.target.value });
  }

  // Reference 1
  function formSubmitHandler(e) {
    e.preventDefault();

    // omit input e
    props.addMainCategoryModalToggler(_, form.name, props.type);
    addMainCategory(form.name, form.iconIndex, props.type);
    setEditModal({
      show: true,
      type: props.type,
      value: "add",
    });
  }

  const iconListContent = iconArr.map((element, index) => {
    const iconImg = <img alt="icon" className={`icon`} src={element} />;

    return (
      <InputRadio
        key={element}
        name="icon"
        ariaLabel="icon"
        label={iconImg}
        value={index}
        classLabel={`${styles.icon} transition--25 ${
          props.type === "expense"
            ? `${styles["icon--expense"]}`
            : `${styles["icon--income"]}`
        }`}
        classContainer={styles["radio__container"]}
        classInput={styles["input--icon"]}
        onChange={radioIconChangeHandler}
        checked={index + "" === form.iconIndex}
      />
    );
  });

  // Reference 2
  const warnningIndex = form.isDuplicate || (form.isTouch && !form.inputValid);

  // Reference 3
  const warnningText = form.isDuplicate
    ? "duplicate category name is not allowed"
    : "required";

  return (
    <Modal
      onClick={props.addMainCategoryModalToggler}
      classModal={styles.modal}
    >
      <Title className={styles.title}>add main category</Title>
      <HorizontalLine />
      <form onSubmit={formSubmitHandler} className={styles.form}>
        <div className={styles.container}>
          <div className={styles["input__container"]}>
            <InputText
              name="maincategory"
              id="name"
              label="main category name"
              value={form.name}
              classLabel={styles.label}
              classInput={
                warnningIndex
                  ? `${styles.input} input--invalid`
                  : `${styles.input}`
              }
              onChange={inputTextChangeHandler}
              onBlur={inputTextTouchHandler}
            />
          </div>
          <Warning className={styles.warning} index={warnningIndex}>
            {warnningText}
          </Warning>
        </div>
        <div className={styles["input__container"]}>
          <p className={`${styles.label} capitalize`}>icon</p>
          <div className={styles["icon__container"]}>{iconListContent}</div>
        </div>
        <div className={styles["btn__container"]}>
          <Button
            onClick={props.addMainCategoryModalToggler}
            className={`${styles.btn} btn--valid transition--25`}
            type="button"
          >
            cancel
          </Button>
          <Button
            disabled={!form.isValid}
            className={`${styles.btn} transition--25 ${styles["btn--right"]} ${
              form.isValid ? `btn--valid` : "btn--invalid"
            }`}
            type="submit"
          >
            add
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default AddMainCategoryModal;

/*
Reference 1

Note that we need to do two things when form is submitted
1) close the adding modal and add the category to the SettingCategory
       (for the sake of immediate showing at that state)
       (this is accomplished by props.addMainCategoryModalToggler)
    
2) truly add the category inside the category provider
       (this is accomplished by addMainCategory)

Again, it seems we're doing duplicate work
But it's not
First function is to make the UI immediately adding the new adding category
Second function is truly add the category where we storing all the category
*/

/*
Reference 2
Note that have four diff indexes
1. isDuplicate
=> check if the input category name is duplicate
=> for the purpose of showing different warnning text

2. isTouch
=> check if the user ever touch the text input
=> for invalid UI

3. inputValid
=> check if input is valid
=> length > 0 && non-duplicate
=> for invalid UI

4. isValid
=> check if it's all valid
=> include valid text input and user has choose the icon

Note
const warnningIndex = form.isDuplicate || (form.isTouch && !form.inputValid);
=> warnningIndex is only for invalid UI
=> include red outline and warnning text
=> has nothing to do with validation of button
=> if form.isDuplicate is true, we certainly know one thing
   -> the user is typing, and typing duplicate category name
   -> immediately show the invalid UI
=> if it's false, continue checking....
=> if form.isTouch is false
   -> it means user never touch the text input
   -> there's no reason showing invalid UI before user touch the text input
   -> so if it's false, we immediately decide to stop the condition and not show the invalid UI
=> if form.isTouch is true
   -> user has touch the text input, now we can check if input is valid
   -> according to the condition of inputValid, we return true or false
*/

/*
Referecne 3
Here, the order DOES matter
note that there are only two reason for the input text invalid
1. duplicate
2. length === 0

And because we don't have the independent index for length = 0, but
we do have the independent index for duplicate
so if it's duplicate, we show duplicate warnning text
if it's not duplicate, and still show the invalid UI
then we know it must be the situation of length is 0

note that here cannont put inputValid
because inputValid is mixed length and duplicate
here we need the index to seperate both different factors for invalid 
*/

/* 
Reference 4
categoryNameArr is for the purpose of checking
if the new category name user is about to add is duplicate
In other words,
we not allow user to have duplicate name
BUT
it's okay to have same name in different type
For example,
we can have "others" in both "expense" and "income"
*/
