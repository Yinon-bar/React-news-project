import { useEffect, useState } from "react";
import "./News.css";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=Apple&from=2022-11-22&sortBy=popularity&apiKey=d4eadc73465e41149e69a1c352b8a65c"
    )
      .then((resp) => resp.json())
      .then((data) => setNews(data));
  }, []);

  console.log(news.articles);

  return <div className="News"></div>;
}

export default News;
