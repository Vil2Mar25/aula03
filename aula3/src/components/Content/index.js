import React from "react";
import "./Content.css";

export default function Content(props) {
return (
  <div className="Content">
      <div className="posts">
      <div className="post">
        <h1 className="titulo">{props.titulo}</h1>
        <img src={'images/${props.image}'} alt={props.alternative} />
      </div>
    </div>
  </div>
  );
}