import { useState } from "react";
import Navbar from "../../navbar/Navbar";
import styled from "../../pages/createArticle/CreateArticle.module.css";
import Input from "../../input/Input";
import React from "react";
import Textarea from "../../Textarea/textarea";
import axios from "axios";
function CreateArticle() {
  // const [articleTitle, setArticleTitle] = useState("");

  const [articles, setArticle] = useState({
    title: "",
    date: "",
    readingtime: "",
    author: "",
    message: "",
    imageUrl: "",
  });

  // let a = {name: String, age:Number} = {name: "ali" , age: 25}
  // let b = {...a};

  const handleChangeArticle = (e) => {
    // setArticleTitle(e.target.name, e.target.value);
    // console.log(e.target.name, e.target.value);

    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeArticleMessage = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      message: e.target.value,
    }));
  };

  const handleCreateNewArticle = () => {
    axios.post("http://localhost:8000/articles", {
      id: "9",
      imageUrl: articles.imageUrl,
      title: articles.title,
      readingtime: articles.readingtime,
      date: articles.date,
      author: articles.author,
      content: articles.message,
    });
  };
  console.log(articles);
  return (
    <>
      <Navbar title="عموهکر" />
      <div className={styled.createArticlePage}>
        <div className="container">
          <h1>ساخت مقاله</h1>

          <Input
            label="عنوان"
            name="title"
            type={"text"}
            placeholder="Enter a title"
            handleChange={handleChangeArticle}
          />
          <Input
            label="تاریخ"
            name="date"
            type="text"
            placeholder="Enter a date"
            handleChange={handleChangeArticle}
          />
          <Input
            label="مدت زمان خواندن"
            name="readingtime"
            type="text"
            handleChange={handleChangeArticle}
            placeholder="Enter a Reading"
          />
          <Input
            label="نویسنده"
            name="author"
            type="text"
            placeholder="Enter a Author"
            handleChange={handleChangeArticle}
          />
          <Input
            label="ادرس عکس"
            name="imageUrl"
            type="text"
            placeholder="Enter an imageUrl"
            handleChange={handleChangeArticle}
          />

          <Textarea label="متن" handleChange={handleChangeArticleMessage} />

          <div className={styled.buttonwrapper}>
            <button onClick={handleCreateNewArticle}>ساخت مقاله</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateArticle;
