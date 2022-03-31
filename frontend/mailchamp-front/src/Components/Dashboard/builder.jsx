import React, { useRef } from "react";
import logo from "../../imges/logo.svg";
import EmailEditor from "react-email-editor";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { templatesList } from "./templates";
import axios from "axios";
export const Builder = (props) => {
  const { id } = useParams();
  let obj = templatesList.find((t) => t.id === id);
  console.log(obj.template);
  const emailEditorRef = useRef(null);

  const saveDesign = () => {
    emailEditorRef.current.saveDesign((design) => {
      console.log("saveDesign", design);
      alert("Design JSON has been logged in your developer console.");
    });
  };

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;

      //   axios
      //     .post("http://localhost:3001/sendmail", {
      //       data: JSON.stringify(html),
      //     })
      //     .then((res) => {
      //       console.log(res);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
    });
  };

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    if (obj.id != "1") {
      const templateJson = obj.template;
      emailEditorRef.current.editor.loadDesign(templateJson);
    }
  };

  const onReady = () => {
    // editor is ready
    console.log("onReady");
  };

  return (
    <div>
      <div className="Builder-nav">
        <div>
          <Link to="/dashboard">
            <img src={logo} width="200px" />
          </Link>
          <span style={{ color: "grey" }}>Untitled</span>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={saveDesign}>Save Design</button>
          <Link to="/dashboard/campaigns">
            <button onClick={exportHtml}>Continue</button>
          </Link>
        </div>
      </div>

      <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
    </div>
  );
};
