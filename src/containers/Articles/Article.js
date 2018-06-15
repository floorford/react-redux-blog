import { connect } from "react-redux";
import history from "../../history";

import { getArticle, deleteArticle, getComments, postComments } from "../../data/actions/api";

import Article from "../../components/Articles/Article";

// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state, { id }) => {
    return {
        // this is why storing articles in an object is useful
        article: state.articles,
        comments: state.comments,
    };
};

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    onLoad: () => {
      dispatch(getArticle(id))
      dispatch(getComments(id))
    },
    onDelete: () => {
      dispatch(deleteArticle(id));
      history.push("/");
    },
    onSubmit: data => dispatch(postComments(data, id)),
  };
};

// connect up mapStateToProps with the Article component
// Article's props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Article);
