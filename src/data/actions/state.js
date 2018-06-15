export const setTitles = (titles) => {
  return {
    type: "setTitles",
    titles: titles,
  };
};

export const setArticle = (article) => {
  return {
    type: "setArticle",
    article: article,
  };
};

export const addArticle = (article) => {
  return {
    type: "addArticle",
    article: article,
  };
};

export const editArticle = ({ title, article, tags }, id) => {
  return {
    type: "editArticle",
    id: id,
    title: title,
    article: article,
    tags: tags
  };
};

export const addComment = (comment) => {
  return {
    type: "addComment",
    comment: comment,
  };
};

export const setComments = (comments) => {
  return {
    type: "setComments",
    comments: comments,
  };
};
