

const chevronBas = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-5 h-5 font-bold"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

export default function NavBar() {

  return (
    <>
      <div className="bg-white max-w-[2000px] border-b border-gray-300 m-auto flex justify-around items-center p-6 Portable:flex-row-reverse">
        <img
          src="https://kodekloud.com/kk-media/image/upload/v1698643790/webflow/631f022194d7ef36d9303cbb_Horizontal.svg"
          alt="KodecloudLogo"
          className="w-[180px]"
        />
        <ul className="flex gap-8 items-center">
          <li className=" navbarElements">bussiness </li>
          <li className=" navbarElements">pricing</li>
          <li className=" navbarElements">
            <ul className="flex items-center gap-2 cursor-pointer">
              <li>playgrounds</li>
              <li>{chevronBas}</li>
            </ul>
          </li>
          <li className=" navbarElements">
            <ul className="flex items-center gap-2 cursor-pointer">
              <li>learning paths </li>
              <li>{chevronBas}</li>
            </ul>
          </li>
          <li className=" navbarElements">
            <ul className="flex items-center gap-2 cursor-pointer">
              <li>ressources </li>
              <li>{chevronBas}</li>
            </ul>
          </li>

          <li className=" navbarElements ">more</li>
          <li className=" navbarElements ">login</li>

          <button className="  text-white text-sm px-4 py-2  rounded-full  font-inter Desktop:hidden Portable:hidden bg-gradient-to-r from-sky-500 to-teal-300">
            join now
          </button>
        </ul>
        <div className="w-8 h-8 Laptop:hidden screenLarge:hidden">
          <img src="https://cdn.icon-icons.com/icons2/2761/PNG/512/menu_hamburger_burger_icon_176431.png" alt="burgerbutton"/>
        </div>
      </div>

    </>
  );
}

