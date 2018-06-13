import React from "react";
import { Link } from "react-router-dom";

// a component to show the Edit and Delete buttons
const Actions = ({ article, onClick }) => (
  <aside className="pull-right">
    <Link to={ "/articles/" + article.id + "/edit" } className="btn btn-info">
      Edit Article
    </Link>

    { " " }

    <button onClick={ onClick }className="btn btn-danger">
      Delete Article
    </button>
  </aside>
)


export default Actions;
