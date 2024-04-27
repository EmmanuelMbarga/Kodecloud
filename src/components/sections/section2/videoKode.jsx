import { useState } from "react";

export default function VideoKode() {
  const [videoCliked, setVideoCliked] = useState(false);

  const handlerClicked = () => {
    setVideoCliked(!videoCliked);
  };

  return (
    <>
      <section className=" max-w-[400px] Portable:max-w-[80%] ">
        <div className="bg-[url(https://assets-global.website-files.com/62a8969da1ab56329dc8c41e/6560c4c01c95b74eceababc9_GitHub%20Actions-p-500.png)] w-[400px]  rounded-xl h-[250px] bg-cover justify-center flex items-center  bg-no-repeat Portable:w-[125%]  mt-10 Portable:h-[200px] ">
          <button
            className="  bg-black p-5 rounded-full bg-opacity-45 hover:p-6"
            style={{ backdropFilter: "blur(2px)", transition: "0.3s" }}
            onClick={handlerClicked}
          >
            <img
              src="https://assets-global.website-files.com/62a8969da1ab561666c8c408/63ec5e6ff65f90c6429ec47b_Vector.svg"
              className="object-cover"
              style={{ width: "20px" }}
              alt="btmPlay"
            />
          </button>
        </div>

        {/* ---------------------------------------------------------------videoKodecloud--------------------------------------------------------------- */}
        {/* {videoCliked && (
        
        )} */}
      </section>
    </>
  );
}
