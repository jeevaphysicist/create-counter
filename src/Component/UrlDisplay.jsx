import React, { useState, useEffect } from "react";


const UrlDisplay = ({ urls }) => {
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentUrlIndex((prevIndex) =>
        prevIndex === urls.length - 1 ? 0 : prevIndex + 1
      );
    }, 30000);

    return () => clearInterval(intervalId);
  }, [urls]);

  return <div>{urls[currentUrlIndex]}</div>;
};

export default UrlDisplay;
