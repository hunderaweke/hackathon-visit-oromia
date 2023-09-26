import image_1 from "../assets/images/destination_1.jpg";
import image_2 from "../assets/images/destination_4.jpg";
import image_3 from "../assets/images/destination_3.jpg";

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
    <div className={`d-flex flex-column justify-content-between p-1 story`}>
      <img src={src} className={`img`} />
      <div>
        <p></p>
        <h6>
          {name} <b>{country}</b>
        </h6>
        <p className={`caption`}>" {caption} "</p>
        <p className="fs-6">{date}</p>
      </div>
    </div>
  );
}
const Stories = () => {
  return (
    <>
      <div className="my-5">.</div>
      <div className="container my-4">
        <h4>Storie Taken Places Neer You</h4>
      </div>

      <div className="container d-flex my-3 flex-wrap gap-3 ">
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
    </>
  );
};

export default Stories;
