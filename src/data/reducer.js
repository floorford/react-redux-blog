// IF DIFF IS WRONG IN REDUX TOOL THE REDUCER HAS A PROBLEM

// need to track the last ID used
// the last ID used by the dummy articles is 2
let lastID = 2;

// create a function that returns a new article
const createArticle = ({ title, article, tags }) => {
  // up the ID by 1 every time
  lastID += 1;

  return {
    id: lastID,
    title: title,
    article: article,
    comments: [],
    tags: tags.split(" ")
  };
};

const addArticle = (state, action) => {
  // create a new article with a dummy ID
  let newArticle = createArticle(action);

  return {
    ...state,
    articles: {
      ...state.articles,

      // add using the dummy ID
      [newArticle.id]: newArticle,
    },
  };
};

const deleteArticle = (state, { id }) => {
  let newState = {...state}
  delete newState.articles[id]

  return newState;
};

const editArticle = (state, { id, title, article, tags }) => {
  let comments = state.articles[id].comments

  return {
    ...state,
    articles: {
      ...state.articles,
      [id]: {
        id: id,
        title: title,
        article: article,
        comments: comments,
        tags: tags.split(" ")
      }
    },
  };
};

// REDUCER SWITCH STATEMENT
const reducer = (state, action) => {
  switch (action.type) {
    case "addArticle": return addArticle(state, action);
    case "deleteArticle": return deleteArticle(state, action);
    case "editArticle": return editArticle(state, action);
    default: return state;
  }
}

export default reducer;
