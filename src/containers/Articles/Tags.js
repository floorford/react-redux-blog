// react redux's connect function
import { connect } from "react-redux";

// import in the Articles component
import Articles from "../../components/Articles/Articles";

// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = ( state, { tag }) => {
  let articles = Object.values(state.articles)

  let releventArticle = articles.filter( article => article.tags.includes(tag))

  return {
    articles: releventArticle
  };
};

// connect up mapStateToProps with the Articles component
// Articles' props are now controlled by this file
export default connect(mapStateToProps)(Articles);

/* tags container, this is passed to it, get the articles, filter through if it has this tag, show the articles. Tags container, can wrap articles component*/
