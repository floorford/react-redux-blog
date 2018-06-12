import React from "react";

import Form from "../Forms/Form";
import FourOhFour from "../FourOhFour";


// the add article component
const Edit = ({ fields, id, article, title }) => !fields ? <FourOhFour /> : (
    <React.Fragment>
      <h2>Edit existing post: </h2>

      <Form className="panel-body" fields={ fields } button="Update Article" />
    </React.Fragment>
);

export default Edit;
