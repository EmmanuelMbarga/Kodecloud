import Btnfree from "../section2/btnfree";
import CardsTopic from "../section2/cardsTopic";
import { Trysuscribe } from "../section2/trysuscribe";
import VideoKode from "../section2/videoKode";

export default function Cardkode1() {
  return (
    <>
      <section className="flex  m-auto bg-gradient-to-r items-center from-blue-600 to-purple-400 p-10 rounded-2xl my-14 Portable:p-4">
        <div className="">
          <span className="bg-violet-300 capitalize p-2 text-sm rounded-xl bg-opacity-40 text-white">
            automation
          </span>
          <div className="my-6">
            <h1 className="text-3xl font-bold capitalize text-violet-50 pb-4">
              gitHub actions
            </h1>
            <p className="textAutomation">
              Unlock the potential of seamless automation and deployment: Master
              GitHub Actions with our comprehensive course, empowering you to
              streamline workflows, ensure error-free releases, and
              revolutionize your software development practices
            </p>
          </div>
          {/* -------------------------------------logo truspilot------------------------------------- */}
          <div className="flex items-center">
            <div className="flex Laptop2:m-auto Desktop:m-auto Portable:m-auto">
              <span className="logoTruspilot">Excellent</span>
              <img
                src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg"
                className="w-28 mr-4"
                alt="truspilot"
              />
            </div>
            <span className="text-white text-sm Laptop2:hidden Desktop:hidden Portable:hidden">
              360 reviews on
            </span>
            <span className="flex ml-4 Desktop:hidden Portable:hidden">
              <img
                src="https://www.mrstarsky.com/wp-content/uploads/2021/10/trustpilot-2.svg"
                alt="truspilot"
                className="w-[18px] Laptop2:hidden "
              />
              <span className="text-white text-sm Laptop2:hidden">
                Trustpilot
              </span>
            </span>
          </div>

          {/* -------------------------------------------logo admin------------------------------------------- */}

          <div className="flex items-center mt-10 max-w-[380px]">
            <img
              src="https://assets-global.website-files.com/62a8969da1ab56329dc8c41e/64173c9d21beabc955d828d3_Trainer%20-%20Siddharth-cutout.webp"
              className="w-14 mr-4"
              alt="mohamed"
            />
            <div className="">
              <div className="text-lg text-white font-bold">
                Barahalikar Siddharth
              </div>
              <div className="textAutomation2">
                Technical Architect and Educator
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------debut configPortable------------------------------------------------------------------  */}
          <div className="hidden Portable:contents ">
            <VideoKode />
            <div className="my-4">
              <Btnfree />
            </div>
            <div className="">
              <Trysuscribe />
            </div>
            <div className="grid grid-cols-2 gap-2 p-4">
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
            </div>
          </div>
          {/* ------------------------------------------------------------------fin configPortable------------------------------------------------------------------  */}

        </div>
        <img
          src="https://assets-global.website-files.com/62a8969da1ab56329dc8c41e/6560c4bc56c61861f36dfc6a_Github%20Actions%20Large.png"
          alt="pautomationGit"
          className="max-w-[210px] max-h-[210px] ml-[20px] Portable:hidden MiniPortable:hidden"
        />
        {/* <VideoKode/> */}
      </section>
    </>
  );
}
