import styles from "./Places.module.css";
import place from "../../../../public/images/destination_1.jpg";

const PLaceCard = () => {
  return (
    <div className={`col m-3 p-2 ${styles.card}`}>
      <img src={place} width={"100%"} className={`${styles.cardImg}`} />
      <h3 className="my-2">Bale Mountains</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
        praesentium.
      </p>
      <p>
        <span className={`${styles.cardDistance}`}>5Km</span> from your current
        position
      </p>
      <button className="btn border-primary">View Detail</button>
    </div>
  );
};

export default PLaceCard;
