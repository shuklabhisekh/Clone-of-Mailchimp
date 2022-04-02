import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css";

import "grapesjs/dist/grapes.min.js";
import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js";
import "./webbuilder.css";
import { useEffect, Fragment } from "react";
export const WebBuilder = () => {
  useEffect(() => {
    grapesjs.init({
      container: "#gjs",
      plugins: ["gjs-preset-webpage"],
    });
  });

  return (
    <div id="gjs" style={{ height: "0px", overflow: "hidden" }}>
      <div className="panel">
        <h1 className="welcome">Welcome to</h1>
        <div className="big-title">
          <svg className="logo" viewBox="0 0 100 100">
            <path d="M40 5l-12.9 7.4 -12.9 7.4c-1.4 0.8-2.7 2.3-3.7 3.9 -0.9 1.6-1.5 3.5-1.5 5.1v14.9 14.9c0 1.7 0.6 3.5 1.5 5.1 0.9 1.6 2.2 3.1 3.7 3.9l12.9 7.4 12.9 7.4c1.4 0.8 3.3 1.2 5.2 1.2 1.9 0 3.8-0.4 5.2-1.2l12.9-7.4 12.9-7.4c1.4-0.8 2.7-2.2 3.7-3.9 0.9-1.6 1.5-3.5 1.5-5.1v-14.9 -12.7c0-4.6-3.8-6-6.8-4.2l-28 16.2" />
          </svg>
          <span>GrapesJS</span>
        </div>
        <div className="description">
          This is a demo content from index.html. For the development, you
          shouldn't edit this file, instead you can copy and rename it to
          _index.html, on next server start the new file will be served, and it
          will be ignored by git.
        </div>
      </div>
    </div>
  );
};
