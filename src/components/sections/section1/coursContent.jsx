import { CardCoursContent } from "./cardCoursContent";
import { NavigatCours } from "../../model/NavigateCourse";
import { useState } from "react";

export default function CoursContent() {
  const [btnClicked,setBtnClicked] =useState(false)

  const handlerbutton=()=>{
    setBtnClicked(!btnClicked)
  }
  const navigates = NavigatCours;
  const row = [];

  navigates.forEach((navigate) => {
    row.push(

      <CardCoursContent
        key={navigate.id}
        CadenasClose={navigate.CadenasClose}
        Nmbrecours={navigate.Nombrecours}
        chevron={navigate.chevronR.chevronright}
        TitleElemnt={navigate.titleelement}
        TitleLesson={navigate.sousMenu.titreLesson}
        Fiches={navigate.sousMenu.Fiche.fiche}
        play={navigate.sousMenu.playObject.play}
        Cours1={navigate.sousMenu.cours1}
        Cours2={navigate.sousMenu.cours2}
        Cours3={navigate.sousMenu.cours3}
        Cours4={navigate.sousMenu.cours4}
        Cours5={navigate.sousMenu.cours5}
        Cours6={navigate.sousMenu.cours6}
        Cours7={navigate.sousMenu.cours7}
        Cours8={navigate.sousMenu.cours8}
        Cours9={navigate.sousMenu.cours9}
        Cours10={navigate.sousMenu.cours10}
        Cours11={navigate.sousMenu.cours11}
        Cours12={navigate.sousMenu.cours12}
        Cours13={navigate.sousMenu.cours13}
        Cours14={navigate.sousMenu.cours14}
        Cours15={navigate.sousMenu.cours15}
        Cours16={navigate.sousMenu.cours16}
        Cours17={navigate.sousMenu.cours17}
        Cours18={navigate.sousMenu.cours18}
        Cours19={navigate.sousMenu.cours19}
        Cours20={navigate.sousMenu.cours20}
        Cours21={navigate.sousMenu.cours21}
        Cours22={navigate.sousMenu.cours22}
        Cours23={navigate.sousMenu.cours23}
        Cours24={navigate.sousMenu.cours24}
        Cours25={navigate.sousMenu.cours25}
        Cours26={navigate.sousMenu.cours26}
        Cours27={navigate.sousMenu.cours27}
        Cours28={navigate.sousMenu.cours28}

      />
    );
  });

  return (
    <div className="border-t p-8">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold"> coure content</h2>
        <button className="text-sm text-sky-400 font-bold border border-sky-500 rounded-full py-2 px-6" onClick={handlerbutton}>
          expand all
        </button>
      </div>

      {/* -----------------------------------------------------------content cours elements----------------------------------------------------------- */}
      <div className="mt-7">
        <div>{row}</div>
      </div>
    </div>
  );
}
