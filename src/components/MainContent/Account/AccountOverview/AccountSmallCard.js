import Card from "../../../UI/Card/Card";
import SubTitle from "../../../UI/SubTitle/SubTitle";
import styles from "./AccountSmallCard.module.css";
import Loading from "../../../UI/Loading/Loading";

function AccountSmallCard(props){
  let cardContent = <Loading className={styles.loading} />;
  if (!props.loading) {
    cardContent = 
          <p
              data-value={props.price}
              data-id={Math.abs(props.price) >= 1000000}
              className={` ${styles["card__number"]} ${
                Math.abs(props.price) >= 1000000
                ? `${styles["card__number--large"]}`
                : ""
              }`}
              onClick={props.moneyModalToggler}>
            {`$${props.price}`}
          </p>
  }

  return (
    <Card className={styles.card}>
      <SubTitle className={styles["card__text"]}>{props.title}</SubTitle>
      {cardContent}
    </Card>
  );
}

export default AccountSmallCard;