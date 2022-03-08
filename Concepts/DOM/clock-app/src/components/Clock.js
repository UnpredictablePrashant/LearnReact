import React, { useEffect, useState } from "react";

function Clock() {
    //setting up a initial state
  const [clockState, setClockState] = useState();

  //creating a lifecycle event
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return <div><span>{clockState}</span></div>;
}

export default Clock;