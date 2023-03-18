import { useRef, useEffect } from "react";

function AutoScrollIframe({ src }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const scrollInterval = setInterval(() => {
      const contentHeight = iframe.contentWindow.document.body.scrollHeight;
      const scrollPosition = iframe.contentWindow.pageYOffset;
      const targetPosition = contentHeight / 2;

      if (scrollPosition < targetPosition) {
        iframe.contentWindow.scrollBy(0, 1);
      } else {
        clearInterval(scrollInterval);
      }
    }, 10);
    console.log("first",iframe);
    return () => {
      clearInterval(scrollInterval);
    };

  }, [iframeRef]);
  let list = src.length >0 && src.map(items=><div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-3 text-center" key={items}><iframe src={items} style={{height:"500px"}}/></div>
   
  )

  return(<div className="row container-fluid mx-auto">
        {list}
  </div>);
}



export default AutoScrollIframe ;