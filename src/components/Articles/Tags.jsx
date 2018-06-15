import React from "react";
import { Link } from "react-router-dom";


// show each tag - tags passed in by parent
const Tags = ({ tags }) => (
  <React.Fragment>
    { tags ? (
      tags.map((tag, i) => (
      <span className="label label-warning" key={ i }><Link to={ "/tags/" + tag }>{ tag } </Link></span>
    ))) : <p>There are no tags</p> }
  </React.Fragment>
);

export default Tags;
