import { Header } from "../Home/1_header/Header";
import YourProfile from "./your_profile/YourProfile";
import YourStory from "./your_story/YourStory";
import Report from "./Report/Report";
import SuggestNewPlace from "./suggest_new_place/SuggestNewPlace";
import AddPost from "./add_post/AddPost";
import YourGroups from "./YourGroups/YourGroups";

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
            <a className="nav-link" data-bs-toggle="tab" href="#addStory">
              Add Story
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#report">
              Report
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#suggest">
              Suggest New Place
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#groups">
            Your Groups
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
          <div id="addStory" className="container tab-pane fade">
            <AddPost />
          </div>
          <div id="report" className="container tab-pane fade">
            <Report />
          </div>
          <div id="suggest" className="container tab-pane fade">
            <SuggestNewPlace />
          </div>
          <div id="groups" className="container tab-pane fade">
            <YourGroups />
          </div>
        </div>
      </div>
    </>
  );
};
