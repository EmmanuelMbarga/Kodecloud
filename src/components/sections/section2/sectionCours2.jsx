import Btnfree from "./btnfree";
import Cardcours1 from "./cardcours1";
import CardsTopic from "./cardsTopic";
import VideoKode from "./videoKode";

export default function SectionCours2App() {
  return (
    <div className="border-l border-gray-200 p-10 Laptop2:px-5">
      {/*------------------------------------ section video Kodecloud------------------------------------ */}
      <div className=" max-w-[1000px] sticky top-4 Desktop:max-w-[1000px] Desktop:static Portable:hidden">
        <VideoKode />
        <Cardcours1 />
        {/* ---------------------------------------------cards cours--------------------------------------------- */}
        <section className="grid grid-cols-2 gap-2 Portable:hidden">
          <CardsTopic
            img={
              "https://assets-global.website-files.com/62a8969da1ab561666c8c408/63ec60a6f3741a3c85af1617_material-symbols_menu-book.svg"
            }
            alt={"livre"}
            title="8 Lessons"
          />
          <CardsTopic
            img={
              "https://assets-global.website-files.com/62a8969da1ab561666c8c408/63ec65acdc39b8dd510c8694_material-symbols_article.svg"
            }
            alt={"fiche"}
            title="107 Topics"
          />

          <CardsTopic
            img={
              "https://assets-global.website-files.com/62a8969da1ab561666c8c408/63ec65c7b3a02fbffa1da601_material-symbols_verified.svg"
            }
            alt={"Course Certificate"}
            title="Course Certificate"
          />
          <CardsTopic
            img={
              "https://assets-global.website-files.com/62a8969da1ab561666c8c408/63ec6cd6a603a92495bda3f2_special_ondemand_video.svg"
            }
            alt={"Demo"}
            title="Demo"
          />
          <CardsTopic
            img={
              "https://assets-global.website-files.com/62a8969da1ab561666c8c408/63ec6cd6e7fe502ef68f4268_material-symbols_video-library.svg"
            }
            alt={"hours of video"}
            title="11.00Hours of Video"
          />
          <CardsTopic
            img={
              "https://assets-global.website-files.com/62a8969da1ab561666c8c408/63ec6cd6da2b102225fcc8bc_material-symbols_laptop-mac.svg"
            }
            alt={"Labs"}
            title="Labs"
          />
          <CardsTopic
            img={
              "https://assets-global.website-files.com/62a8969da1ab561666c8c408/63ec6cd6e5b15cd976560a3e_special_people_alt.svg"
            }
            alt={"Community support"}
            title="Community support"
          />
        </section>
        {/* ------------------------------------------------btn try for Free------------------------------------------------ */}
        <section className="mt-12">
          <Btnfree />
        </section>

        <section className="max-w-[400px] w-auto mt-2">
          <p className="text-xs text-center">
            When you join KodeKloud, {"you'll"} get access to all of our premium
            courses and hands-on labs.
          </p>
        </section>
      </div>
    </div>
  );
}
