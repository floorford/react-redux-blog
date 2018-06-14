// import our axios config file
import axios from "../axios";

import { setTitles, addArticle, setArticle } from "./state";

export const getTitles = () => dispatch => {
  axios.get("/articles").then(({ data }) => {
    const titles = data.data;

    // dispatch the setTitles action, passing along the articles List
    dispatch(setTitles(titles));
  });
};

export const postArticle = ({ title, article, tags }) => dispatch => {
  axios.post("/articles", {
    title: title,
    article: article,
    tags: tags.split(" ")
  }).then(({ data }) => {
    const article = data.data;
    dispatch(addArticle(article));
  });
};

export const getArticle = (id) => dispatch => {
  axios.get(`/articles/${id}`).then(({ data }) => {
    const article = data.data
    console.log(article)
    dispatch(setArticle(article))
  });
};
