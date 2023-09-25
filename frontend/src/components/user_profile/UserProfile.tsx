import { Header } from "../Home/1_header/Header";
import YourProfile from "./your_profile/YourProfile";
import YourStory from "./your_story/YourStory";
import Report from "./Report/Report";

export const UserProfile = () => {
  return (
    <>
      <Header />
      <div className="my-5">.</div>

      <div className="container my-5 py-3">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" href="#Profile">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#Story">
              Story
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#report">
              Report
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div id="Profile" className="container tab-pane active">
            <YourProfile />
          </div>
          <div id="Story" className="container tab-pane fade">
            <YourStory />
          </div>
          <div id="report" className="container tab-pane fade">
            <Report />
          </div>
        </div>
      </div>
    </>
  );
};
