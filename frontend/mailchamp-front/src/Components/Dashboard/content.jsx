import React, { useState } from "react";
import Accordion2 from "./Accordion2";
export const Content = ({ toggle }) => {
  const accordionData = [
    {
      title: "Create your first campaign",
      content: ["Audience Dashboard", "All Contact"],
    },
    {
      title: "Add your contacts",
      content: ["Audience Dashboard", "All Contact"],
    },
    {
      title: "Launch",
      content: ["Audience Dashboard", "All Contact"],
    },
  ];
  return (
    <div className={toggle ? "content expand" : "content"}>
      <div className="content--header">
        <div>
          <img src="https://us14.admin.mailchimp.com/images/app-homepage/onboardingChecklistIllustration.svg" />
          <span>Here’s what we recommend you do next...</span>
        </div>
        <div>
          <span>1/3</span>
        </div>
      </div>
      <div className="accordion">
        {accordionData.map(({ title, content, icon }) => (
          <Accordion2 title={title} content={content} />
        ))}
      </div>
    </div>
  );
};
