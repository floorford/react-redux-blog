import { connect } from "react-redux";
import history from "../../history";

import Article from "../../components/Articles/Article";
import { deleteArticle, addComment } from "../../data/actions";

// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state, { id }) => {
    return {
        // this is why storing articles in an object is useful
        article: state.articles[id],
    };
};

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    onDelete: () => {
      dispatch(deleteArticle(id));
      history.push("/");
    },
    addComment: data => dispatch(addComment(id, data)),
  };
};

// connect up mapStateToProps with the Article component
// Article's props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Article);
