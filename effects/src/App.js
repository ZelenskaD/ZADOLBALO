import './App.css';


import ProfileViewerWithSearch from "./ProfileViewer";
import TimerWrapper from "./TimewWrapper";
import React from "react";
import Video from "./Video";
import Focuser from "./Focuser";

function App() {
  return (
    <div className="App">
        <TimerWrapper />
        <ProfileViewerWithSearch />
        <Video />
        <Focuser />
    </div>
  );
}

export default App;
