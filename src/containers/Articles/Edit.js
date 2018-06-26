import { connect } from "react-redux";
import history from "../../history";

import { getArticle, putArticle } from "../../data/actions/api";
import Edit from "../../components/Articles/Edit";

// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state, { id }) => {
  let article = state.articles;

  const title = article ? article.title : null;
  const fields = article ? [
    { name: "title", label: "Title", value: article.title },
    { name: "article", label: "Article", value: article.article },
    { name: "tags", label: "Tags", value: article.tags.join(" ") },
  ] : null;

  return {
    title: title,
    fields: fields
  };
};

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    onLoad: () => dispatch(getArticle(id)),
    // onSubmit is a function which dispatches an action "addArticle"
    onSubmit: data => {
      dispatch(putArticle(data, id));

      // navigate to the home page
      history.push("/");
    },
  };
};

// connect up mapStateToProps with the Article component
// Edit's props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Edit);
