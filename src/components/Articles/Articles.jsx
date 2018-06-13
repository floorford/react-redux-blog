import React from "react";
import { Link } from "react-router-dom";

// shows a list of articles
const Articles = ({ articles }) => (
  <React.Fragment>
    { /* check there are articles to show */ }
    { articles.length ?
      <ul className="list-group">
        { /* map over each article and display a list item for each one */ }
        { articles.map(article => (
          <li className="list-group-item" key={ article.id }>
          { /* link to the article using its id */ }
            <Link to={ "/articles/" + article.id }>{ article.title }</Link>
            <li className="list-group-item list-group-item-info" key={ article.id }>
              Tags: { article.tags.map((tag, i) => (
              <Link to={ "/tags/" + tag }> { tag } </Link>
             ))}
            </li>
          </li>
        ))}
      </ul> :
      <p>No articles found</p>
    }
  </React.Fragment>
);


export default Articles;
