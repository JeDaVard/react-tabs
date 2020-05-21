import React from "react";
import { LinkedTabs, Tab } from "../LinkedTabs/LinkedTabs";

export default function Chanels(props) {
  const tabParam = new URLSearchParams(props.location.search).get("tab");

  return (
    <main className="main">
      <h2 className="pageName">Events</h2>
      <LinkedTabs route={"events"} defaultTab={tabParam}>
        <Tab label={"upcoming"} tabName={"Upcoming"}>
          <p>Upcoming events goes here</p>
        </Tab>
        <Tab label={"past"} tabName={"Past"}>
          <p>Your past events</p>
        </Tab>
      </LinkedTabs>
    </main>
  );
}
