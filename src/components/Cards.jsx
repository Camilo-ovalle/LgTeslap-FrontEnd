import "../styles/cards.css";

import React from "react";

function Cards(props) {
  const { title, body, href } = props;

  return (
    <div className="div">
      <a className="CardContainer" href={href}>
        <h2 className="CardTitle">{title}</h2>
        <p className="CardBody">{body}</p>
      </a>
    </div>
  );
}

export default Cards;
