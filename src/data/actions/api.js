// import our axios config file
import axios from "../axios";
import history from "../../history";

import { setTitles, addArticle, setArticle, editArticle, setComments, addComment } from "./state";

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
    dispatch(setArticle(article))
  });
}

export const deleteArticle = (id) => dispatch => {
  axios.delete(`/articles/${id}`).then(history.push("/"))
};

// DELETE IS NO LONGER WORKING

export const patchArticle = ({ title, article, tags }, id) => dispatch => {
  axios.patch(`/articles/${id}`, {
    title: title,
    article: article,
    tags: tags.split(" ")
  }).then(({ data }) => {
    const article = data.data;
    dispatch(editArticle(article));
  });
};

export const getComments = (id) => dispatch => {
  axios.get(`/articles/${id}/comments`).then(({ data }) => {
    const comments = data.data;
    dispatch(setComments(comments));
  });
};

export const postComments = ( comment , id) => dispatch => {
  axios.post(`/articles/${id}/comments`, comment).then(({ data }) => {
    const comment = data.data;
    dispatch(addComment(comment));
  });
};
