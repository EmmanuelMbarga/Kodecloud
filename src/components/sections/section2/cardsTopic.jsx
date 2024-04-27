export default function CardsTopic(props) {
  return (
    <>
      < >
        <div className="flex gap-4 rounded-xl bg-gray-100 p-4 max-w-[210px] items-center text-gray-500 Desktop:max-w-[1000px] Portable:bg-violet-500 Portable:bg-opacity-30 Portable:text-white  Portable:py-4 Portable:px-2">
          <span>
            <img
              src={props.img}
              alt={props.alt}
            />
          </span>
          <span className="Portable:text-sm">{props.title}</span>
        </div>
       
      </>
    </>
  );
}
