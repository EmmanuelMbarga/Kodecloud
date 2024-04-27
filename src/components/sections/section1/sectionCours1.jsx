import LienpageKodecloud from "./Lienpage";
import Cardkode1 from "./cardkode1";
import CoursContent from "./coursContent";
import DescriptionBaraha from "./descriptionBaraha";
import Descriptionkode from "./descriptionkode";
import StudentOur from "./studentOur";
import StudentWorks from "./studentWorks";

export default function SectionCours1() {
  return (
    <div className="max-w-[56%] Laptop2:[50%] Desktop:m-auto Desktop:max-w-[95%] Portable:m-auto Portable:max-w-[90%] MiniPortable:m-auto MiniPortable:max-w-[250px]">
      {/*    */}
      {/* -------------------------------sectionLiens et Card------------------------------- */}
      <LienpageKodecloud />
      {/* -----------------------------------sectionCards Automation----------------------------------- */}
      <Cardkode1 />
      {/* ----------------------------------------------studentsWork---------------------------------------------- */}

      <StudentWorks />

      {/* ------------------------------------------------DescriptionKodecloud------------------------------------------------ */}
      <Descriptionkode />
      {/*--------------------------------------------------studentsOur--------------------------------------------------  */}
      <StudentOur/>

      {/* ------------------------------------------------description mohamed------------------------------------------------ */}
      <DescriptionBaraha/>

      {/* -------------------------------------------------------course content------------------------------------------------------- */}
        <CoursContent/>
    </div>
  );
}
