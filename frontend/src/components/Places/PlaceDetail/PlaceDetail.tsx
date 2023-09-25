import styles from "./PlaceDetail.module.css";

import image_1 from "../../../../public/images/destination_1.jpg";
import image_2 from "../../../../public/images/destination_4.jpg";
import image_3 from "../../../../public/images/destination_3.jpg";
interface props {
  id: string;
  src: string;
  name: string;
  country: string;
  date: string;
}

function Story({ src, name, country, date }: props) {
  return (
    <div
      className={`d-flex flex-column justify-content-between p-1 w-25 ${styles.story}`}
    >
      <img src={src} className={`${styles.img}`} />
      <div>
        <h6>
          {name} <b>{country}</b>
        </h6>
        <p className="fs-6">{date}</p>
      </div>
    </div>
  );
}

const PlaceDetail = () => {
  return (
    <div className="container">
      <div className="m-auto col-12 col-md-8 my-5">
        <div className="image_stack d-flex gap-2">
          <img src={image_1} className="col-4" />
          <img src={image_2} className="col-4" />
          <img src={image_3} className="col-4 last_img" />
        </div>
        <h2 className="my-3">Sofumar Cave</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          repellat, accusamus eligendi adipisci, excepturi minima sint
          exercitationem obcaecati reprehenderit quisquam nostrum vero maxime
          molestiae in sed cumque nisi esse ullam magni commodi eum consectetur!
          Aperiam sed commodi rem? Fugit unde nemo similique magnam debitis
          ipsum vero, enim nesciunt architecto repellat.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          repellat, accusamus eligendi adipisci, excepturi minima sint
          exercitationem obcaecati reprehenderit quisquam nostrum vero maxime
          molestiae in sed cumque nisi esse ullam magni commodi eum consectetur!
          Aperiam sed commodi rem? Fugit unde nemo similique magnam debitis
          ipsum vero, enim nesciunt architecto repellat.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          repellat, accusamus eligendi adipisci, excepturi minima sint
          exercitationem obcaecati reprehenderit quisquam nostrum vero maxime
          molestiae in sed cumque nisi esse ullam magni commodi eum consectetur!
          Aperiam sed commodi rem? Fugit unde nemo similique magnam debitis
          ipsum vero, enim nesciunt architecto repellat.
        </p>
        <div className="story">
          <h5>
            Stories form <b>Sofumar Cave</b>
          </h5>
          <div className="image_stack row gap-2">
            <Story
              id="a"
              name="Kiya kebe"
              country="Ethiopia"
              date="2022-12-09"
              src={image_1}
            />
            <Story
              id="b"
              name="Kiya kebe"
              country="Ethiopia"
              date="2022-12-09"
              src={image_2}
            />
            <Story
              id="c"
              name="Kiya kebe"
              country="Ethiopia"
              date="2022-12-09"
              src={image_3}
            />
            <Story
              id="d"
              name="Kiya kebe"
              country="Ethiopia"
              date="2022-12-09"
              src={image_1}
            />
            <Story
              id="e"
              name="Kiya kebe"
              country="Ethiopia"
              date="2022-12-09"
              src={image_3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;
