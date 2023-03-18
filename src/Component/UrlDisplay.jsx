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
  let list = src.length >0 && src.map(items=><div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-3 text-center" key={items}><iframe src={items} /></div>
   
  )

  return(<div className="row container-fluid mx-auto">
         
         <div>
         <p>
           <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Part 1 Open(50)
           </button>
         </p>
        <div className="collapse" id="collapseExample">
          <div className="row mx-auto">
          {
               list
           }
          </div>

        </div>
        <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Part 1 Close(50)
           </button>
           <hr/><hr/>
        </div>
          
         
        {/* <div>
         <p>
           <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
            Part 2 Open(100)
           </button>
         </p>
        <div className="collapse" id="collapseExample1">
          <div className="row mx-auto">
          {
               list
           }
          </div>

        </div>
        <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
            Part 2 Close(100)
           </button>
           <hr/><hr/>
        </div> */}

  {/*       <div>
         <p>
           <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
            Part 3 Open(150)
           </button>
         </p>
        <div className="collapse" id="collapseExample2">
          <div className="row mx-auto">
          {
               list
           }
          </div>

        </div>
        <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
            Part 3 Close(150)
           </button>
           <hr/><hr/>
        </div>

        <div>
         <p>
           <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
            Part 4 Open(200)
           </button>
         </p>
        <div className="collapse" id="collapseExample3">
          <div className="row mx-auto">
          {
               list
           }
          </div>

        </div>
        <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
            Part 4 Close(200)
           </button>
           <hr/><hr/>
        </div>

        <div>
         <p>
           <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
            Part 5 Open(250)
           </button>
         </p>
        <div className="collapse" id="collapseExample4">
          <div className="row mx-auto">
          {
               list
           }
          </div>

        </div>
        <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
            Part 5 Close(250)
           </button>
           <hr/><hr/>
        </div>

        <div>
         <p>
           <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample">
            Part 6 Open(300)
           </button>
         </p>
        <div className="collapse" id="collapseExample5">
          <div className="row mx-auto">
          {
               list
           }
          </div>

        </div>
        <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample">
            Part 6 Close(300)
           </button>
           <hr/><hr/>
        </div>

        <div>
         <p>
           <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample">
            Part 7 Open(350)
           </button>
         </p>
        <div className="collapse" id="collapseExample6">
          <div className="row mx-auto">
          {
               list
           }
          </div>

        </div>
        <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample">
            Part 7 Close(350)
           </button>
           <hr/><hr/>
        </div>

        <div>
         <p>
           <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample7" aria-expanded="false" aria-controls="collapseExample">
            Part 8 Open(400)
           </button>
         </p>
        <div className="collapse" id="collapseExample7">
          <div className="row mx-auto">
          {
               list
           }
          </div>

        </div>
        <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample7" aria-expanded="false" aria-controls="collapseExample">
            Part 8 Close(400)
           </button>
           <hr/><hr/>
        </div>

        <div>
         <p>
           <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample8" aria-expanded="false" aria-controls="collapseExample">
            Part 9 Open(450)
           </button>
         </p>
        <div className="collapse" id="collapseExample8">
          <div className="row mx-auto">
          {
               list
           }
          </div>

        </div>
        <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample8" aria-expanded="false" aria-controls="collapseExample">
            Part 9 Close(450)
           </button>
           <hr/><hr/>
        </div>

        <div>
         <p>
           <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample9" aria-expanded="false" aria-controls="collapseExample">
            Part 10 Open(500)
           </button>
         </p>
        <div className="collapse" id="collapseExample9">
          <div className="row mx-auto">
          {
               list
           }
          </div>

        </div>
        <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample9" aria-expanded="false" aria-controls="collapseExample">
            Part 10 Close(500)
           </button>
           <hr/><hr/>
        </div> */}
{/* 
        <div>
         <p>
           <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample10" aria-expanded="false" aria-controls="collapseExample">
            Part 11 Open (550)
           </button>
         </p>
        <div className="collapse" id="collapseExample10">
          <div className="row mx-auto">
          {
               list
           }
          </div>

        </div>
        <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample10" aria-expanded="false" aria-controls="collapseExample">
            Part 11 Close(550)
           </button>
           <hr/><hr/>
        </div>

        <div>
         <p>
           <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample11" aria-expanded="false" aria-controls="collapseExample">
            Part 12 Open(600)
           </button>
         </p>
        <div className="collapse" id="collapseExample11">
          <div className="row mx-auto">
          {
               list
           }
          </div>

        </div>
        <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample11" aria-expanded="false" aria-controls="collapseExample">
            Part 12 Close(600)
           </button>
           <hr/><hr/>
        </div>

        <div>
         <p>
           <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample12" aria-expanded="false" aria-controls="collapseExample">
            Part 13 Open(650)
           </button>
         </p>
        <div className="collapse" id="collapseExample12">
          <div className="row mx-auto">
          {
               list
           }
          </div>

        </div>
        <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample12" aria-expanded="false" aria-controls="collapseExample">
            Part 3 Close(650)
           </button>
           <hr/><hr/>
        </div>

        <div>
         <p>
           <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample13" aria-expanded="false" aria-controls="collapseExample">
            Part 14 Open(700)
           </button>
         </p>
        <div className="collapse" id="collapseExample13">
          <div className="row mx-auto">
          {
               list
           }
          </div>

        </div>
        <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample13" aria-expanded="false" aria-controls="collapseExample">
            Part 14 Close(700)
           </button>
           <hr/><hr/>
        </div>

        <div>
         <p>
           <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample14" aria-expanded="false" aria-controls="collapseExample">
            Part 15 Open(750)
           </button>
         </p>
        <div className="collapse" id="collapseExample14">
          <div className="row mx-auto">
          {
               list
           }
          </div>

        </div>
        <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample14" aria-expanded="false" aria-controls="collapseExample">
            Part 15 Close(750)
           </button>
           <hr/><hr/>
        </div>

        <div>
         <p>
           <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample15" aria-expanded="false" aria-controls="collapseExample">
            Part 16 Open(800)
           </button>
         </p>
        <div className="collapse" id="collapseExample15">
          <div className="row mx-auto">
          {
               list
           }
          </div>

        </div>
        <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample15" aria-expanded="false" aria-controls="collapseExample">
            Part 16 Close(800)
           </button>
           <hr/><hr/>
        </div>

        <div>
         <p>
           <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample16" aria-expanded="false" aria-controls="collapseExample">
            Part 17 Open(850)
           </button>
         </p>
        <div className="collapse" id="collapseExample16">
          <div className="row mx-auto">
          {
               list
           }
          </div>

        </div>
        <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample16" aria-expanded="false" aria-controls="collapseExample">
            Part 17 Close(850)
           </button>
           <hr/><hr/>
        </div>

        <div>
         <p>
           <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample17" aria-expanded="false" aria-controls="collapseExample">
            Part 18 Open(900)
           </button>
         </p>
        <div className="collapse" id="collapseExample17">
          <div className="row mx-auto">
          {
               list
           }
          </div>

        </div>
        <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample17" aria-expanded="false" aria-controls="collapseExample">
            Part 18 Close(900)
           </button>
           <hr/><hr/>
        </div>

        <div>
         <p>
           <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample18" aria-expanded="false" aria-controls="collapseExample">
            Part 19 Open(950)
           </button>
         </p>
        <div className="collapse" id="collapseExample18">
          <div className="row mx-auto">
          {
               list
           }
          </div>

        </div>
        <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample18" aria-expanded="false" aria-controls="collapseExample">
            Part 19 Close(950)
           </button>
           <hr/><hr/>
        </div>

        <div>
         <p>
           <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample19" aria-expanded="false" aria-controls="collapseExample">
            Part 20 Open(1000)
           </button>
         </p>
        <div className="collapse" id="collapseExample19">
          <div className="row mx-auto">
          {
               list
           }
          </div>

        </div>
        <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample19" aria-expanded="false" aria-controls="collapseExample">
            Part 20 Close(1000)
           </button>
           <hr/><hr/>
        </div> */}
  </div>
  );
}



export default AutoScrollIframe ;