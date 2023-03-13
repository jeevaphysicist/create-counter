import React, { useState, useEffect } from "react";
import image from "../logo.svg";

const Page = () => {
  const [hasRead, setHasRead] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // Check if user has scrolled past the featured image
      const featuredImage = document.querySelector(".featured-image");
      if (featuredImage) {
        const featuredImageHeight = featuredImage.getBoundingClientRect().height;
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollPosition > featuredImageHeight) {
          setHasRead(true);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <h1>Your Page</h1>
      {
        hasRead ?"Thanks for reading! " : <div>
      
      <div className="featured-image">
        <img src={image} alt="Featured Image" />
      </div>
      <p>
      Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
Reads are visits to your page during which the reader has engaged with your content. This means they've spent more than just a brief moment on the page, they've scrolled past your featured image to read some of your content, or maybe they've clicked on a link or embedded video you've included. 

For that reason, simple page refreshes, or page clicks and immediate bounces off the page, won't count as reads. Instead, our read algorithm takes into account the length of your story, the percentage a reader has scrolled, and the time they spend on the page in order to calculate whether the reader has engaged.
      </p>
      </div>
}
      {hasRead && (
        <div>
          <p>Thanks for reading!</p>
        </div>
      )}
    </div>
  );
};

export default Page;

