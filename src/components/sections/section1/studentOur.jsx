import { Carrousselplateform } from "./carrousselplateform";


export default function StudentOur() {
  return (
    <>
         <section className="m-auto border-b border-gray-300 pb-6">
        <h3 className="font-bold font-Poppins text-xl py-6">
          what our students say
        </h3>
        <div className="flex gap-10">
          <div>
            <h4 className="text-center text-xl">Excellent</h4>
            <span>
              <img
                src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg"
                className="w-40 py-2"
                alt="truspillot"
              />
            </span>
            <div className="text-center text-xs">
              Based on <u>369 reviews</u>
            </div>
            <br />
            <div className="flex justify-center items-center gap-1">
              <img
                src="https://www.mrstarsky.com/wp-content/uploads/2021/10/trustpilot-2.svg"
                alt="trutpilot"
                className="w-6"
              />
              <span className="font-bold">Trustpilot</span>
            </div>
          </div>
          <div className="max-w-[600px] p-3 Desktop:max-w-[70%] Portable:max-w-[200px] Laptop2:max-w-[80%]">
            <Carrousselplateform/>           
            <p className="text-xs mt-4">Showing our favorite reviews</p>
          </div>
        </div>
      </section>
    </>
  )
}
