import { connect } from "react-redux";
import history from "../../history";

import { deleteArticle } from "../../data/actions";
import Actions from "../../components/Articles/Actions";

// map dispatch to props gets given store's dispatch method as the first argument
// again, we return an object which gets passed in as props to the wrapped component
const mapDispatchToProps = ( dispatch, { article } ) => {
  return {
    // onSubmit is a function which dispatches an action "addArticle"
    onClick: () => {
      dispatch(deleteArticle(article.id));

      // navigate to the home page
      history.push("/");
    },
  };
};

// connect up mapDispatchToProps with the Add component
// has to be the second argument - the first is for mapStateToProps
// Add' props are now controlled by this file
export default connect(null, mapDispatchToProps)(Actions);
