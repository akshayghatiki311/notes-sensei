import React from "react";
import Notes from "./Notes";

function Home(props) {
  
  return (
    <div>
      <Notes updateAlert={props.updateAlert}/>
    </div>
  );
}

export default Home;
