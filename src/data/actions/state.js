export const setTitles = (titles) => {
  return {
    type: "setTitles",
    titles: titles,
  };
};

export const setArticle = (article) => {
  return {
    type: "setTitles",
    article: article,
  };
};

export const addArticle = (article) => {
  return {
    type: "addArticle",
    article: article,
  };
};

export const deleteArticle = (id) => {
  return {
    type: "deleteArticle",
    id: id
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

export const addComment = (id, { email, comment }) => {
  return {
    type: "addComment",
    id: id,
    email: email,
    comment: comment,
  };
};
