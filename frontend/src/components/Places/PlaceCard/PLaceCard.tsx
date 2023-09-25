import styles from "./Places.module.css";;

interface props{
  title: string,
  img: string,
  description: string,
  distance: string,
  url: string,
}

const PLaceCard = ({img, title, description, distance, url}: props) => {

  return (
    <div className={`m-3 p-2 ${styles.card}`}>
      <img src={img} width={"100%"} className={`${styles.cardImg}`} />
      <h3 className="my-2">{title}</h3>
      <p>
       {description}
      </p>
      <p>
        <span className={`${styles.cardDistance}`}>{distance}</span> from your current
        position
      </p>
      <a
        href={url}
        target="_blank"
        className="btn border-primary"
      >
        View Detail
      </a>
    </div>
  );
};

export default PLaceCard;
