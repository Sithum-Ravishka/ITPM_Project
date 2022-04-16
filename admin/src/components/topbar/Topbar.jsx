import { Search } from "@material-ui/icons";
import React from "react";

import "./topbar.scss";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbar">
        <div className="searchbox">
          <input type="search" placeholder="Search" className="search" />
          <button className="serBtn">
            <Search />
          </button>
        </div>
        <div className="profileImg">
          <img
            src="https://icon-library.com/images/system-administrator-icon/system-administrator-icon-1.jpg"
            alt="profileImg"
            className="profileImg"
          />
        </div>
      </div>
    </div>
  );
}
