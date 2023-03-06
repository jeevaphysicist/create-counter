import React ,{useState} from 'react'


 let add = 0;

function App() {
    let array = ["https://vocal.media/01/how-to-make-mutton-chukka-indian-style",
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
              "https://youtube.com/shorts/fbJ8JaBSgZ0?feature=share",
              "https://youtube.com/shorts/JllJ476ofD4?feature=share",
              "https://youtube.com/shorts/DBIA_fuNiiQ?feature=share",
              "https://youtube.com/shorts/eTF5hRBNoIE?feature=share",
              "https://youtube.com/shorts/7WryE9VkGr4?feature=share"
              ];
  const [count,setCount]= useState(0);
  const [url,setUrl] = useState(array[0]);
  const [hours,setHours]= useState("");
  const [min,setMin]= useState("");
  const [sec,setSec]= useState("");
  const [ampm,setampm]= useState("");
  const [on,setOn] = useState(false);
  const [button,setButton] = useState(false);

              // console.log("array",array);
             
              function openUrls() {
                array.forEach(url => {
                  window.open(url, '_blank');
                });
              }
  return (
    <div>
    <button onClick={openUrls}>Open URLs in new tab</button>
  </div>
  );
}

export default App;
