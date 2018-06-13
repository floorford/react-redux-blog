import React from "react";

import Form from "../Forms/Form";
import FourOhFour from "../FourOhFour";


// the edit article component
const Edit = ({ fields, title, onSubmit }) => !fields || !title ? <FourOhFour /> : (
  <React.Fragment>
    <h2>Edit: { title }</h2>

    <Form className="panel-body" fields={ fields } onSubmit={ onSubmit } button="Update Article" />
  </React.Fragment>
);

export default Edit;
