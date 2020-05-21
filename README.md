### React Tabs and Linked Tabs (by query params)

**Usage**

~~

_Tabs_

`import { Tabs, Tab } from "./Tabs/Tabs"`

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
  
  ~~
  
~~

_LinkedTabs_

`import { LinkedTabs, Tab } from "./LinkedTabs/LinkedTabs"`

      <LinkedTabs route={"events"} defaultTab={tabParam}>
        <Tab label={"upcoming"} tabName={"Upcoming"}>
          <p>Upcoming events goes here</p>
        </Tab>
        <Tab label={"past"} tabName={"Past"}>
          <p>Your past events</p>
        </Tab>
      </LinkedTabs>

~~
