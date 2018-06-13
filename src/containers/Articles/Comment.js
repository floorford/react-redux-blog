import { connect } from "react-redux";
import history from "../../history";

import { addComment } from "../../data/actions";
import Comment from "../../components/Articles/Comment";

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    // onSubmit is a function which dispatches an action "addArticle"
    onSubmit: data => {
      dispatch(editArticle(data, id));

      // navigate to the home page
      history.push("/");
    },
  };
};

// connect up mapStateToProps with the Article component
// Edit's props are now controlled by this file
export default connect(null, mapDispatchToProps)(Comment);
