// IF DIFF IS WRONG IN REDUX TOOL THE REDUCER HAS A PROBLEM

// take the articles we've been given and set them as articles
const setTitles = (state, { titles }) => {
  return {
    ...state,
    titles: titles,
  };
};

const setArticle = (state, { article }) => {
  return {
    ...state,
    articles: article
  };
};


const addArticle = (state, { article }) => {
  return {
    ...state,
    articles: {
      ...state.articles,
      [article.id]: article
    },
  };
};

const editArticle = (state, { id, article, title, tags }) => {
  return {
    ...state,
    articles: {
      ...state.articles,
      [id]: {
        ...state.articles[id],
        title: title,
        article: article,
        tags: tags,
      },
    },
  };
};

const setComments = (state, { comments }) => {
  return {
    ...state,
    comments: comments
  };
};

const addComment = (state, { comment }) => {
  return {
    ...state,
    comments: state.comments.concat({id: comment.id, email: comment.email, comment: comment.comment})
  };
};

// REDUCER SWITCH STATEMENT
const reducer = (state, action) => {
  switch (action.type) {
    case "setTitles": return setTitles(state, action);
    case "setArticle": return setArticle(state, action);
    case "addArticle": return addArticle(state, action);
    case "editArticle": return editArticle(state, action);
    case "setComments": return setComments(state, action);
    case "addComment": return addComment(state, action);
    default: return state;
  }
}

export default reducer;
