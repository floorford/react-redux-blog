import React, { Component } from "react";

import Form from "../Forms/Form";

// the fields to use for the comments form
const fields = [
    { name: "email", label: "Email", value: "" },
    { name: "comment", label: "Comment", value: "" },
];

class Comments extends Component {
  render(){
    const { onSubmit, comments } = this.props;

    return (
      <React.Fragment>
        <h2>Comments</h2>
        { comments ? (
        <ul className="list-group">
          { /* loop over all the comments */ }
          { comments.map(comment => (
            <li key={ comment.id } className="list-group-item">
              <h4 className="list-group-item-heading">{ comment.email }</h4>
              <p className="list-group-item-text">{ comment.comment }</p>
            </li>
          ))}
        </ul>) : <p>There are currently no comments, create one below!</p> }

        <section className="panel panel-default">
          <h3 className="panel-heading panel-title">Add Comment</h3>
          { /* pass through fields, button and also a className prop */ }
          <Form className="panel-body" onSubmit={ onSubmit } fields={ fields } button="Add Comment" />
        </section>
      </React.Fragment>
    )
  }
};

export default Comments;
