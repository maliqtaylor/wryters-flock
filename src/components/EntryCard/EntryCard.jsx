import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-materialize";
import "materialize-css/dist/css/materialize.min.css";

function EntryCard({ user, entry }) {
  console.log(entry);
  return (
    // <Card>
    //   <div className="card-image waves-effect waves-block waves-light">
    //     <div className="card-content">
    //     <span className="card-title activator grey-text text-darken-4">{entry.title}<i className="material-icons right">more_vert</i></span>
    //       <p>{entry.description}</p>
    //     </div>
    //     <div className="card-reveal">
    //       <p>{entry.genre}</p>
    //       <p>{entry.classification}</p>
    //     </div>
    //   </div>
    // </Card>

    <div className='card'>
  <div className='card-content'>
    Content
  </div>
  <div className='card-action'>
    <a className='btn-activator'>
      Register
    </a>
  </div>
  <div className='card-reveal'>
    <a className='btn'>
      Register
    </a>
  </div>
</div>
  );
}

export default EntryCard;
