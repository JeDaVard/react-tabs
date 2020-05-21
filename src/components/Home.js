import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <h3>
        Simplest tab realization on &nbsp;
        <Link to="/channels" className="link">
          Channels
        </Link>
      </h3>
      <h3>
        Linked tab realization on &nbsp;
        <Link to="/events" className="link">
          Events
        </Link>
      </h3>
    </main>
  );
}
