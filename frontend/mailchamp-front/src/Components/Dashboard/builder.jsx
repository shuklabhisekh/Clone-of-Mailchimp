import React, { useRef } from "react";
import logo from "../../imges/logo.svg";
import EmailEditor from "react-email-editor";

export const Builder = (props) => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
    });
  };

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  const onReady = () => {
    // editor is ready
    console.log("onReady");
  };

  return (
    <div>
      <div className="Builder-nav">
        <div>
          <img src={logo} width="200px" />
          <span style={{ color: "grey" }}>Untitled</span>
        </div>
        <button onClick={exportHtml}>Continue</button>
      </div>
      {/* <div></div> */}

      <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
    </div>
  );
};
