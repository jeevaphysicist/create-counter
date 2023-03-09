import React ,{useState} from 'react' ;
import UrlOpener from "./Component/UrlOpener";


 let add = 0;

function App() {
    let urls = ["https://vocal.media/horror/the-mystery-of-the-haunted-house-a-spooky-adventure-for-brave-kids",
                "https://vocal.media/education/what-is-full-stack-developer",
                "https://vocal.media/education/how-to-become-a-front-end-developer-3qi45n0gkr",
                "https://vocal.media/horror/the-mystery-of-the-haunted-house-a-spooky-adventure-for-brave-kids",
                "https://vocal.media/horror/the-mystery-of-the-haunted-house-a-spooky-adventure-for-brave-kids-chapter-2",
                "https://vocal.media/horror/the-mystery-of-the-haunted-house-a-spooky-adventure-for-brave-kids-chapter-3",
                "https://vocal.media/horror/the-mystery-of-the-haunted-house-a-spooky-adventure-for-brave-kids-chapter-4",
                "https://vocal.media/horror/the-mystery-of-the-haunted-house-a-spooky-adventure-for-brave-kids-chapter-5",
                "https://vocal.media/horror/the-mystery-of-the-haunted-house-a-spooky-adventure-for-brave-kids-chapter-6",
                "https://vocal.media/horror/the-mystery-of-the-haunted-house-a-spooky-adventure-for-brave-kids-chapter-7-the-treasure-hunt",
                "https://vocal.media/journal/the-united-states-of-america-exploring-its-rich-history-culture-and-economy",
                 "https://vocal.media/journal/germany-a-historical-overview",
                 "https://vocal.media/journal/discovering-the-rich-and-diverse-culture-of-sri-lanka",
                 "https://vocal.media/journal/home-depot-and-oscar-isaac",
                 "https://vocal.media/journal/the-evolution-of-pogo-a-look-at-two-decades-of-innovative-children-s-programming-in-india",
                 "https://vocal.media/journal/exploring-the-economic-powerhouses-top-10-richest-countries-in-the-world",
                 "https://vocal.media/journal/the-evolution-of-mickey-mouse-tracing-the-iconic-journey-of-a-beloved-cultural-icon",
                 "https://vocal.media/journal/the-evolution-of-cartoon-network-from-classic-cartoons-to-global-entertainment",
                 "https://vocal.media/journal/the-legacy-of-ben-10-a-comprehensive-look-at-the-iconic-animated-series-and-its-cultural-impact",
                 "https://vocal.media/journal/evaluating-the-impact-of-chutti-tv-on-children-s-programming-in-india",
                 "https://vocal.media/families/tips-for-making-perfect-tandoori-chicken",
                 "https://vocal.media/journal/withdrawal-of-vocal-media-wallet-to-indian-bank-account",
                 "https://vocal.media/families/recipe-for-butter-chicken",
                 "https://vocal.media/families/authentic-chole-bhature-recipe",
                 "https://vocal.media/families/traditional-indian-dosa-recipe",
                 "https://vocal.media/families/samosas-a-flavorful-and-versatile-indian-snack",
                 "https://vocal.media/journal/canva-the-all-in-one-design-platform-for-designers-and-non-designers",
                 "https://vocal.media/wander/himalayan-mountaineering",
                 "https://vocal.media/journal/online-money-making-sjrn02ms",
                 "https://vocal.media/wander/agali-exploring-the-natural-beauty-and-tribal-culture-of-kerala",
                 "https://vocal.media/lifehack/food-importance-nutrition-energy-cultural-significance-social-significance-economic-importance-health-benefits-food-safety",
                 "https://vocal.media/wander/brihadeeswarar-temple-thanjavur",
                 "https://vocal.media/journal/walmart-history-success-and-business-strategies",
                 "https://vocal.media/lifehack/health-benefits-of-eating-fish",
                 "https://vocal.media/journal/exploring-the-rich-heritage-and-culture-of-india-a-comprehensive-guide",
                 "https://vocal.media/journal/the-united-kingdom-exploring-its-history-culture-economy-and-politics",
                 "https://vocal.media/journal/human-dog-relationship-the-enduring-bond-and-its-benefits",
                 "https://vocal.media/futurism/the-academy-of-magic-eliza-s-journey-to-becoming-a-witch",
                "https://vocal.media/01/how-to-make-mutton-chukka-indian-style",
                "https://vocal.media/01/how-to-make-biryani-indian-style-cooking-in-indian-style",
                "https://vocal.media/families/a-tale-of-space-repair-and-friendship-de4cmr0nuh",
                "https://vocal.media/poets/chasing-the-north-star-s-light",
                "https://vocal.media/journal/easy-peasy-ai",
                "https://vocal.media/journal/ponniyin-selvan-1-fresh-floods-chapter-5-the-kuravai-koothu",
                "https://vocal.media/fiction/ponniyin-selvan-fresh-floods-chapter-1-auspicious-aadi",
                "https://vocal.media/journal/ponniyin-selvan-1-fresh-floods-chapter-7-of-mirth-and-consequences",
                "https://vocal.media/journal/ponniyin-selvan-fresh-floods-chapter-3-the-vinnagara-temple",
                "https://vocal.media/journal/ponniyin-selvan-1-fresh-floods-chapter-6-a-meeting-at-midnight",
                "https://vocal.media/journal/ponniyin-selvan-fresh-floods-chapter-2-azhwarkkadiyaan-nambi",
                "https://vocal.media/journal/ponniyin-selvan-1-fresh-floods-chapter-8-who-is-in-the-palanquin",
                "https://vocal.media/journal/ponniyin-selvan-1-fresh-floods-chapter-12-nandhini",
               "https://vocal.media/journal/ponniyin-selvan-1-fresh-floods-chapter-11-explosive-entrances",
               "https://vocal.media/journal/ponniyin-selvan-1-fresh-floods-chapter-9-conversations-by-the-wayside",
               "https://vocal.media/journal/ponniyin-selvan-1-fresh-floods-chapter-10-the-astrologer-of-kudandhai",
               "https://vocal.media/journal/ponniyin-selvan-fresh-floods-chapter-4-the-kadambur-palace"
              ];
 

  
  
  return (
    <div>
           <button style={{color:"white",fontWeight:"bolder",fontSize:"20px",padding:"5px", backgroundColor:'red',border:"none"}}>
               Please Wait 50 seconds to start work
           </button>
           <UrlOpener urls={urls} />
    </div>
   
  );
}

export default App;
