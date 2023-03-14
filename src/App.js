import React ,{useState ,useRef, useEffect } from 'react' ;
import UrlOpener from "./Component/UrlOpener";
import Countalgorithm from "./Component/Countalgorithm";


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
                 "https://vocal.media/journal/the-ultimate-guide-to-seo-for-saa-s-companies-drive-more-traffic-and-sales-with-these-proven-strategies",
                 "https://vocal.media/journal/leveling-up-a-comprehensive-guide-to-search-engine-optimization-seo-for-the-gaming-industry",
                 "https://vocal.media/journal/the-power-of-combining-digital-marketing-automation-and-seo",
                 "https://vocal.media/journal/top-10-technical-seo-trends-you-need-to-know-in-2023",
                 "https://vocal.media/journal/chat-marketing-and-search",
                 "https://vocal.media/journal/optimizing-for-micro-moments-how-seo-can-help-businesses-win-critical-consumer-moments",
                 "https://vocal.media/journal/curating-content-for-seo-best-practices-for-diversifying-your-content-strategy-and-attracting-more-website-traffic",
                 "https://vocal.media/journal/the-ultimate-guide-to-seo-for-news-sites",
                 "https://vocal.media/journal/online-reputation-management-the-key-to-building-credibility-and-improving-search-rankings",
                 "https://vocal.media/journal/seo-dxcc0ecm",
                 "https://vocal.media/journal/need-for-speed-how-website-speed-impacts-search-rankings-and-user-experience",
                 "https://vocal.media/journal/breaking-down-multilingual-seo-strategies-for-reaching-a-global-audience",
                 "https://vocal.media/journal/7-essential-strategies-for-seo-for-voice-assistants",
                 "https://vocal.media/journal/from-energy-consumption-to-circular-economy-how-search-engines-are-tackling-sustainability",
                 "https://vocal.media/journal/the-power-of-user-generated-content-ugc-in-seo-harnessing-the-voice-of-your-audience",
                 "https://vocal.media/journal/revolutionizing-digital-marketing-the-impact-of-ai-powered-content-and-seo-strategies",
                 "https://vocal.media/journal/internet-of-things-io-t-and-search",
                 "https://vocal.media/journal/the-ultimate-guide-to-seo-for-podcasts-how-to-optimize-your-show-for-maximum-visibility-and-reach",
                 "https://vocal.media/journal/the-blockchain-revolution-how-blockchain-technology-can-transform-the-search-industry-for-improved-accuracy-privacy-and-content-rewards",
                 "https://vocal.media/journal/the-power-of-mobile-app-indexing-how-to-optimize-your-app-for-search-engines",
                 "https://vocal.media/journal/see-it-to-believe-it-the-power-of-visual-search-and-how-to-optimize-your-visual-content-for-better-seo",
                 "https://vocal.media/journal/the-power-of-seo-how-to-drive-more-sales-with-e-commerce-and-search-optimization",
                 "https://vocal.media/journal/the-power-of-local-business-listings-how-to-optimize-your-listings-for-improved-seo-and-online-reputation",
                 "https://vocal.media/journal/maximizing-business-success-how-user-experience-and-search-are-intertwined",
                 "https://vocal.media/journal/unlocking-the-power-of-content-marketing-boosting-your-search-engine-rankings-and-driving-business-growth",
                 "https://vocal.media/journal/unlocking-the-power-of-data-driven-seo-how-to-improve-your-seo-strategy-with-analytics",
                 "https://vocal.media/journal/personalization-in-search-benefits-challenges-and-how-it-works",
                 "https://vocal.media/journal/chatbots-and-search",
                 "https://vocal.media/journal/schema-markup-and-seo-a-comprehensive-guide-to-boosting-your-search-rankings",
                 "https://vocal.media/journal/voice-assistants-and-search-how-they-re-changing-search-behavior-and-what-businesses-can-do-to-optimize-content",
                 "https://vocal.media/journal/google-algorithm-9shk0gk1",
                 "https://vocal.media/journal/the-impact-of-influencer-marketing-on-search-engines-leveraging-influencers-to-boost-seo",
                 "https://vocal.media/journal/the-power-of-natural-language-processing-nlp-in-seo-how-it-can-transform-your-content-strategy",
                 "https://vocal.media/journal/the-future-of-search-engine-marketing-2023-trends-and-techniques",
                 "https://vocal.media/journal/the-search-experience-of-tomorrow-how-virtual-and-augmented-reality-vr-ar-will-revolutionize-seo",
                 "https://vocal.media/journal/social-media-and-seo-how-to-boost-your-online-presence",
                 "https://vocal.media/journal/protecting-your-privacy-the-importance-of-data-privacy-in-search-engines",
                 "https://vocal.media/journal/unlocking-the-power-of-featured-snippets-a-guide-to-serp-features-and-seo",
                 "https://vocal.media/journal/the-future-of-seo-semantic-search-and-its-impact-on-online-marketing",
                 "https://vocal.media/journal/the-ultimate-guide-to-local-search-and-seo-how-to-optimize-your-website-for-local-keywords-and-boost-your-business-s-visibility-in-your-local-area",
                 "https://vocal.media/journal/mobile-first-indexing-the-ultimate-guide-to-optimizing-your-website-for-mobile-search",
                 "https://vocal.media/journal/maximizing-your-video-content-s-reach-the-essential-guide-to-video-seo-and-optimization",
                 "https://vocal.media/journal/revolutionizing-search-the-role-of-artificial-intelligence-in-transforming-search-engines",
                 "https://vocal.media/journal/voice-search-optimization-how-to-optimize-your-website-for-the-future-of-search",
                 "https://vocal.media/journal/superman-vs-iron-man-a-comparison-of-iconic-superheroes",
                 "https://vocal.media/journal/the-evolution-of-marvel-from-timely-comics-to-a-global-entertainment-franchise",
                 "https://vocal.media/journal/the-evolution-of-disney-from-cartoon-studio-to-entertainment-powerhouse",
                 "https://vocal.media/01/how-to-make-mutton-chukka-indian-style",
                 "https://vocal.media/01/how-to-make-biryani-indian-style-cooking-in-indian-style",
                 "https://vocal.media/families/a-tale-of-space-repair-and-friendship-de4cmr0nuh",



              //   "https://vocal.media/journal/ponniyin-selvan-1-fresh-floods-chapter-5-the-kuravai-koothu",
              //   "https://vocal.media/fiction/ponniyin-selvan-fresh-floods-chapter-1-auspicious-aadi",
              //   "https://vocal.media/journal/ponniyin-selvan-1-fresh-floods-chapter-7-of-mirth-and-consequences",
              //   "https://vocal.media/journal/ponniyin-selvan-fresh-floods-chapter-3-the-vinnagara-temple",
              //   "https://vocal.media/journal/ponniyin-selvan-1-fresh-floods-chapter-6-a-meeting-at-midnight",
              //   "https://vocal.media/journal/ponniyin-selvan-fresh-floods-chapter-2-azhwarkkadiyaan-nambi",
              //   "https://vocal.media/journal/ponniyin-selvan-1-fresh-floods-chapter-8-who-is-in-the-palanquin",
              //   "https://vocal.media/journal/ponniyin-selvan-1-fresh-floods-chapter-12-nandhini",
              //  "https://vocal.media/journal/ponniyin-selvan-1-fresh-floods-chapter-11-explosive-entrances",
              //  "https://vocal.media/journal/ponniyin-selvan-1-fresh-floods-chapter-9-conversations-by-the-wayside",
              //  "https://vocal.media/journal/ponniyin-selvan-1-fresh-floods-chapter-10-the-astrologer-of-kudandhai",
              //  "https://vocal.media/journal/ponniyin-selvan-fresh-floods-chapter-4-the-kadambur-palace"
              ];

            //   const [count,setCount]= useState(0);
            //   const [url,setUrl] = useState(urls[0]);
            //   const [hours,setHours]= useState("");
            //   const [min,setMin]= useState("");
            //   const [sec,setSec]= useState("");
            //   const [ampm,setampm]= useState("");
            //   const [on,setOn] = useState(false);
            //   const [button,setButton] = useState(false);
            
            //               // console.log("array",array);
                         
            // const viewdata =(data)=>{
              
                          
            //              if(add <= 8){
            //              setUrl(urls[add]);  
            //              add++;          
            //                }
            //                else{
            //                  add = 0 ;
            //                }
            //               }
            // const handleclick = ()=>{
            //   setButton(true);
            //   setOn(true);
            //   if(count === 0){
            
            //                     setTimeout(viewdata,30000);
            // }
            //                     setInterval(viewdata,30000);
            //   }
            
              
            
            // setInterval(()=>{
            
            
            // var hh = new Date().getHours();
            // var mm = new Date().getMinutes();
            // var ss = new Date().getSeconds();
            // var am =(hh>=12)?"PM":"AM";
            // setampm(am);
            
            // //convert 24 UST to 12 UST
            // if(hh>=12){
            //   hh=hh-12;
            // }
            
            //    hh = (hh<10)?'0'+hh : hh;
            //    mm = (mm<10)?'0'+mm : mm;
            //    ss = (ss<10)?'0'+ss : ss;
            //    setHours(hh);
            //    setMin(mm);
            //    setSec(ss);
            // })
            
            // ;
 
            // const iframeRef = useRef(null);

            // useEffect(() => {
            //   const scrollIframe = () => {
            //     const iframe = iframeRef.current;
            //     const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            //     const height = iframeDoc.documentElement.scrollHeight;
            //     const middle = height / 2;
            //     iframeDoc.documentElement.scrollTo(0, middle);
            //   };
          
            //   const timeoutId = setTimeout(scrollIframe, 5000);
          
            //   return () => {
            //     clearTimeout(timeoutId);
            //   };
            // }, []);
  
  
  return (
    <div>
           <Countalgorithm/>
    </div>
  //   <div className="App">

  //   <button className='button' onClick={()=>{handleclick()}} disabled={button} style={{color:"white",border:"2px solid transparent"
  //                                                ,backgroundColor:"red",fontWeight:"bolder",fontSize:'25px'
  //                                                 ,borderRadius:'7px',padding:'5px',marginLeft:"30%",marginTop:'30px',cursor:"pointer"}}>
  //      click me see a magic
  //   </button><br/><br/>
  //   &nbsp; &nbsp; &nbsp; &nbsp;{on ? <span style={{marginLeft:"30%",fontSize:'30px',fontWeight:"bolder",}}>{hours}:{min}:{sec}</span>:""}
  //   <br/>
  //   <iframe
  //     ref={iframeRef}
  //     src="https://dear-viewer.onrender.com"
  //     onLoad={() => {
        
  //     }}
  //   />
  // </div>
   
  );
}

export default App;
