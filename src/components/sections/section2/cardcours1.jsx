import Btnfree from "./btnfree";
import { Trysuscribe } from "./trysuscribe";

export default function Cardcours1() {
  return (
    <>
      <section className="max-w-[400px] m-auto my-4 Desktop:max-w-[1000px] Desktop:m-auto ">
        <h2 className="text-xl font-bold my-1">
          Get access to KodeKloud’s all premium courses.
        </h2>
        <p className="text-gray-400 my-2">
          You’ll get access to80+premium courses,700+hands-on labs,
          and65+playgrounds.
        </p>

        <Btnfree />

        <Trysuscribe/>
      </section>
    </>
  );
}
