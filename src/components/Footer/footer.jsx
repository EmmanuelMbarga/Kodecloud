import { FooterStateApp } from "../../container/footerState";
import { elementfooter } from "../model/elementfooter";
import { FooterSection1 } from "./footerSection1";
import { FooterSection2 } from "./footerSection2";
import { FooterSection3 } from "./footerSection3";
import { FooterSection4 } from "./footerSection4";

export const FooterApp = () => {
  const Elements = elementfooter;

  const row = [];

  Elements.forEach((Element) => {
    console.log(Element.chevron.chevronright);
    row.push(<FooterStateApp 
      key={Element.id}
      ChevronR={Element.chevron.chevronright}
      text={Element.titleElement}
      titre1={Element.element1}
      titre2={Element.element2}
      titre3={Element.element3}
      titre4={Element.element4}
      titre5={Element.element5}
      titre6={Element.element6}
      titre7={Element.element7}
      titre8={Element.element8}
      
      />);
  });

  return (
    <>
      <footer className="bg-gray-50 max-w-[1920px] m-auto pt-20 px-20 pb-4 Desktop:p-0 Portable:p-2">
        {/* --------------------------------------------------------------------------footer1-------------------------------------------------------------------------- */}
        <FooterSection1 />
        <div>{row}</div>
        {/* ---------------------------------------------------------------------------fouter 2 ---------------------------------------------------------------------------*/}
        <div className="flex justify-around m-auto w-[100%] items-end -mt-22 Desktop:p-4 Desktop:mt-1 Portable:flex-col-reverse Portable:mt-20 Portable:items-start">
          <FooterSection2 />
          <div className="Portable:w-[100%]">
            <FooterSection3 />
            {/* --------------------------------------------------------------logo all web Site-------------------------------------------------------------- */}
            <FooterSection4 />
          </div>
        </div>
      </footer>
    </>
  );
};
