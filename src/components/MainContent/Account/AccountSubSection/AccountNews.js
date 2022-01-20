import { useEffect, useState } from "react";
import Card from "../../../UI/Card/Card";
import Title from "../../../UI/Title/Title";
import SubTitle from "../../../UI/SubTitle/SubTitle";
import BtnIcon from "../../../UI/BtnIcon/BtnIcon";
import style from "./AccountNews.module.css";
import { BiRefresh } from "react-icons/bi";

const newsArr = [];

let newsIndex = 0;

function AccountNews(props) {
  const [news, setNews] = useState({
    title: "",
    img: "",
    url: "",
    description: "",
    source: "",
  });

  useEffect(() => {
    async function getNews() {
      const data = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5295e93382ff4fd1a92c1256f5843d3f"
      );
      const res = await data.json();
      newsArr.push(...res.articles);

      setNews({
        title: newsArr[0].title,
        editedTitle:
          newsArr[0].title.length >= 70 && window.innerWidth > 1200
            ? newsArr[0].title.slice(0, 60) + "....."
            : newsArr[0].title,

        img: newsArr[0].urlToImage,
        url: newsArr[0].url,
        description: newsArr[0].description.length,
        source: newsArr[0].source.name,
      });
    }

    getNews();
  }, []);

  function refreshClickHandler() {
    newsIndex++;
    if (newsIndex === 20) newsIndex = 0;

    setNews({
      title: newsArr[newsIndex].title,
      editedTitle:
        newsArr[newsIndex].title.length >= 70 && window.innerWidth > 1200
          ? newsArr[newsIndex].title.slice(0, 60) + "....."
          : newsArr[newsIndex].title,
      img: newsArr[newsIndex].urlToImage,
      url: newsArr[newsIndex].url,
      description: newsArr[newsIndex].description,
      source: newsArr[newsIndex].source.name,
    });
  }

  return (
    <Card className={style.card}>
      <div className={style["title__section"]}>
        <Title className={style.title}>latest news</Title>
        <BtnIcon
          classText={style["btn__text"]}
          text="next"
          onClick={refreshClickHandler}
        >
          <BiRefresh className={style.refresh} />
        </BtnIcon>
      </div>
      <SubTitle title={news.title} className={style.subTitle}>
        {news.editedTitle}
      </SubTitle>
      <div className={style["img__container"]}>
        <a href={news.url} target="_blank">
          <img
            className={style.img}
            src={news.img}
            alt="latest business news"
            title={news.description}
          />
        </a>
        <span className={style.source}>{`source: ${news.source}`}</span>
      </div>
    </Card>
  );
}

export default AccountNews;
