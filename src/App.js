import React ,{useState} from 'react' ;
import UrlOpener from "./Component/UrlOpener";


 let add = 0;

function App() {
    let urls = ["https://vocal.media/01/how-to-make-mutton-chukka-indian-style",
               "https://vocal.media/01/how-to-make-biryani-indian-style-cooking-in-indian-style",
               "https://vocal.media/families/a-tale-of-space-repair-and-friendship-de4cmr0nuh",
               "https://vocal.media/horror/the-mystery-of-the-haunted-house-a-spooky-adventure-for-brave-kids",
               "https://vocal.media/horror/the-mystery-of-the-haunted-house-a-spooky-adventure-for-brave-kids-chapter-2",
               "https://vocal.media/horror/the-mystery-of-the-haunted-house-a-spooky-adventure-for-brave-kids-chapter-3",
               "https://vocal.media/horror/the-mystery-of-the-haunted-house-a-spooky-adventure-for-brave-kids-chapter-4",
               "https://vocal.media/horror/the-mystery-of-the-haunted-house-a-spooky-adventure-for-brave-kids-chapter-5",
              "https://vocal.media/horror/the-mystery-of-the-haunted-house-a-spooky-adventure-for-brave-kids-chapter-6",
              "https://vocal.media/horror/the-mystery-of-the-haunted-house-a-spooky-adventure-for-brave-kids-chapter-7-the-treasure-hunt",
              "https://vocal.media/poets/chasing-the-north-star-s-light",
              "https://vocal.media/futurism/the-academy-of-magic-eliza-s-journey-to-becoming-a-witch",

              ];
 

  
  
  return (
    <UrlOpener urls={urls} />
  );
}

export default App;
