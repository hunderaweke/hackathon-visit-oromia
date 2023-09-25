import styles from "./story.module.css";

import image_1 from "../../../assets/images/destination_1.jpg";
import image_2 from "../../../assets/images/destination_4.jpg";
import image_3 from "../../../assets/images/destination_3.jpg";

interface props {
  id: string;
  src: string;
  name: string;
  caption: string;
  country: string;
  date: string;
}

function Story({ src, name, caption, country, date }: props) {
  return (
    <div
      className={`d-flex flex-column justify-content-between p-1 ${styles.story}`}
    >
      <img src={src} className={`${styles.img}`} />
      <div>
        <p></p>
        <h6>
          {name} <b>{country}</b>
        </h6>
        <p className={`${styles.caption}`}>" {caption} "</p>
        <p className="fs-6">{date}</p>
      </div>
    </div>
  );
}
const YourStory = () => {
  return (
    <div className="contaier-fluid d-flex flex-wrap gap-3 ">
      <Story
        id="a"
        name="Kiya kebe"
        caption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos, cupiditate laborum aliquam odio ducimus."
        country="Ethiopia"
        date="2022-12-09"
        src={image_1}
      />
      <Story
        id="a"
        name="Kiya kebe"
        caption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos, cupiditate laborum aliquam odio ducimus."
        country="Ethiopia"
        date="2022-12-09"
        src={image_2}
      />
      <Story
        id="a"
        name="Kiya kebe"
        caption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos, cupiditate laborum aliquam odio ducimus."
        country="Ethiopia"
        date="2022-12-09"
        src={image_3}
      />
      <Story
        id="a"
        name="Kiya kebe"
        caption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos, cupiditate laborum aliquam odio ducimus."
        country="Ethiopia"
        date="2022-12-09"
        src={image_1}
      />
      <Story
        id="a"
        name="Kiya kebe"
        caption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos, cupiditate laborum aliquam odio ducimus."
        country="Ethiopia"
        date="2022-12-09"
        src={image_2}
      />
      <Story
        id="a"
        name="Kiya kebe"
        caption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos, cupiditate laborum aliquam odio ducimus."
        country="Ethiopia"
        date="2022-12-09"
        src={image_3}
      />
    </div>
  );
};

export default YourStory;
