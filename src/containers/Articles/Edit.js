import { connect } from "react-redux";
import Edit from "../../components/Articles/Edit";

// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state, { id }) => {
  console.log(state)
  return {
    title: state.articles[id].title,
    fields: [
        { name: "title", label: "Title", value: state.articles[id].title },
        { name: "article", label: "Article", value: state.articles[id].article },
    ]
  };
};

// connect up mapStateToProps with the Article component
// Edit's props are now controlled by this file
export default connect(mapStateToProps)(Edit);
