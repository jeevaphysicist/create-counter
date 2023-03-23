import React, { useState, useEffect } from "react";

const UrlOpener = ({ urls }) => {
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      window.open(urls[currentUrlIndex], "_blank");
      setCurrentUrlIndex((prevIndex) =>
        prevIndex === urls.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, [urls, currentUrlIndex]);

  return null;
};


export default UrlOpener;
