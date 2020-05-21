import React from "react";
import { Tabs, Tab } from "../Tabs/Tabs";

export default function Channels() {
  return (
    <main className="main">
      <h2 className="pageName">Channels</h2>
      <Tabs>
        <Tab label={"recommended"} tabName={"Recommended"}>
          <p>Recommended channels for you</p>
        </Tab>
        <Tab label={"subscribed"} tabName={"Subscribed"}>
          <p>You haven't subscribed to any channel</p>
        </Tab>
        <Tab label={"subscribers"} tabName={"Subscribers"}>
          <h5>Millions of subscribers</h5>
        </Tab>
      </Tabs>
    </main>
  );
}
