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
    articles: {
      ...state.articles,
      [article.id]: article
    },
  };
};
// {id: 2, title: "Blog #2", article: "Potato, potato potato, potatey!", tags: Array(2)}
// {id: 80, title: "sfsdfsdfs", article: "fsdfsfsdf", tags: Array(1)}

const addArticle = (state, { article }) => {
  return {
    ...state,
    articles: {
      ...state.articles,
      [article.id]: article
    },
  };
};

const deleteArticle = (state, { id }) => {
  let newState = {...state}
  delete newState.articles[id]

  return newState;
};

const editArticle = (state, { id, article, title }) => {
  return {
    ...state,
    articles: {
      ...state.articles,
      [id]: {
        ...state.articles[id],
        title: title,
        article: article,
      },
    },
  };
};

const addComment = (state, { id, email, comment }) => {
  return {
    ...state,
    articles: {
      ...state.articles,
      [id]: {
        ...state.articles[id],
        comments: state.articles[id].comments.concat([{
          email: email,
          comment: comment,
        }]),
      },
    },
  };
};

// REDUCER SWITCH STATEMENT
const reducer = (state, action) => {
  switch (action.type) {
    case "setTitles": return setTitles(state, action);
    case "setArticle": return setArticle(state, action);
    case "addArticle": return addArticle(state, action);
    case "deleteArticle": return deleteArticle(state, action);
    case "editArticle": return editArticle(state, action);
    case "addComment": return addComment(state, action);
    default: return state;
  }
}

export default reducer;
