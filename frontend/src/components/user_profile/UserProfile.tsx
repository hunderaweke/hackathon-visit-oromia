import { Header } from "../Home/1_header/Header";
import YourProfile from "./your_profile/YourProfile";
import YourStory from "./your_story/YourStory";

// import styles from "./userprofile.module.css";
export const UserProfile = () => {
  return (
    <>
      <Header />
      <div className="my-5">.</div>
      
<div className="container mt-3">
  <ul className="nav nav-tabs" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" data-bs-toggle="tab" href="#Profile">Profile</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="tab" href="#Story">Story</a>
    </li>
  </ul>

  <div className="tab-content">
    <div id="Profile" className="container tab-pane active"><br />
      <YourProfile />
    </div>
    <div id="Story" className="container tab-pane fade"><br />
      <YourStory />
    </div>
  </div>
</div>
    </>
  );
};
