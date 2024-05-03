import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import "remixicon/fonts/remixicon.css";

function NewsComponent({ country, category, pagesize }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    const fetchNews = async()=>{
      try {
        const data = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=eb4c3429fa9b4619a3138d3db2223b30&page=${page}&pagesize=${pagesize}`
        );
        setTotal(data.data.totalResults);
        setNews(data.data.articles);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchNews()
  },[page])

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[news])

  const handleprev = () => {
    setPage(page - 1);
  };
  const handlenext = () => {
    console.log("next");
  };

  return (
    <>
      <div className="container mx-auto  px-10 py-8 md:px-15 ">
        <h2 className="text-2xl  font-bold text-gray-800 mb-7 mt-14 text-center md:text-4xl">
          Top {category} News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-x-28 lg:gap-x-12 ">
          {news.map((article, index) => (
            <NewsItem
              key={index}
              title={article.title ? article.title.slice(0, 40) : ""}
              description={
                article.description ? article.description.slice(0, 80) : ""
              }
              img={article.urlToImage}
              url={article.url}
              author={article.author ? article.author : "Unknown"}
              date={article.publishedAt}
            />
          ))}
        </div>
        <div className="flex justify-between items-center md:mx-9 mt-3">
          <div>
            {page > 1 && (
              <button
                className="bg-blue-500 md:hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                onClick={handleprev}
              >
                <i className="ri-arrow-left-line"></i> Previous
              </button>
            )}
          </div>
          <div>
            {page < total / 6 && (
              <button
                className="bg-blue-500 md:hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                onClick={handlenext}
              >
                Next <i className="ri-arrow-right-line"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsComponent;
