import React, { useEffect, useState } from "react";

const urlList = [
  "https://www.google.com",
  "https://www.facebook.com",
  "https://www.twitter.com"
];

function UrlLoader() {
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.location.href = urlList[currentUrlIndex];
      if (currentUrlIndex < urlList.length - 1) {
        setCurrentUrlIndex(currentUrlIndex + 1);
      }
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [currentUrlIndex]);

  return (
    <div>
      <h1>Loading URLs one by one:</h1>
      {urlList.map((url) => (
        <p key={url}>{url}</p>
      ))}
    </div>
  );
}

export default UrlLoader;
