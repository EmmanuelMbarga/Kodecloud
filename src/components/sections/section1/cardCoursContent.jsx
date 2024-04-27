import { useState } from "react";

export const CardCoursContent = (props) => {
  const [btnclick, setBtnclick] = useState(false);

  const handlerClicked = () => {
    setBtnclick(!btnclick);
  };
  return (
    <>
      <div className="flex justify-between bg-gray-100 p-4 my-4 rounded-xl">
        <div className="flex gap-2 items-center Desktop:gap-1 Portable:gap-1">

          <div
            className={btnclick ? "rotate":"noRotate"}
            onClick={handlerClicked}
          >
           {props.chevron}
          </div>
          <span className="capitalize Desktop:text-sm Portable:text-xs max-w-[400px] Portable:max-w-[100px]">{props.TitleElemnt}</span>
          <span>
            <img src={props.CadenasClose} alt="icons" className="Desktop:w-5 Desktop:h-5 Portable:w-5 Portable:h-5"/>
          </span>
        </div>
        <p className="ml-10 Portable:ml-2">{props.Nmbrecours}</p>
      </div>
      {/* --------------------------------------------------cours-------------------------------------------------- */}
      {btnclick && (
        <>
          <div className={btnclick ? "openFile" : "closeFile "}>
            <h2 className="capitalize Portable:text-sm">{props.TitleLesson}</h2>

              <TypeofCourse PlaySvg={props.play} CoursElement={props.Cours1}/>
              <TypeofCourse PlaySvg={props.play} CoursElement={props.Cours2}/>
              <TypeofCourse PlaySvg={props.play} CoursElement={props.Cours3}/>
              <TypeofCourse PlaySvg={props.play} CoursElement={props.Cours4}/>
              <TypeofCourse PlaySvg={props.play} CoursElement={props.Cours5}/>
              <TypeofCourse PlaySvg={props.play} CoursElement={props.Cours6}/>

          </div>
        </>
      )}
    </>
  );
};


const TypeofCourse=(props)=>{
    return(
<div className="flex gap-2 mt-8 Portable:gap-3 items-center justify-items-center">
              <div className="h-6 w-6 rounded-full Portable:w-4 Portable:h-4">{props.PlaySvg}</div>
              <p className="Portable:text-xs">{props.CoursElement}</p>
            </div>
    )
}