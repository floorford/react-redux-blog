const initial = {
  // store the article titles
  titles: [],

  // store the full articles
  articles: {},

  // store relevant article comments
  comments: [],
  // this is called flattening state, referencing them seperately by their individual id and then putting them in their own state. You could add them to the specific article, so it doesn't reload the comments everytime
};

export default initial;
