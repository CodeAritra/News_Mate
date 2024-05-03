import React from "react";

const NewsItem = ({ img,title,description,url,author,date }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4" >
      <img
        src={(img)?img:"https://timesofindia.indiatimes.com/thumb/msid-81560824,width-600,height-400,resizemode-4/81560824.jpg"}
        alt="img"
      />
      <div className="px-4 py-2">
        <h3 className="text-sm md:text-xl font-semibold text-gray-800">{title}...</h3>
        <p className="text-gray-600 mt-1 text-xs md:text-lg">{description}...</p>
        <p className="text-gray-600 font-bold mt-1 text-xs md:text-lg">
              <p className="text-xs md:text-sm">
                {author} published on {new Date(date).toGMTString()}
              </p>
            </p>
      </div>
      <div className="px-4 py-2">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-semibold hover:text-blue-600"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
