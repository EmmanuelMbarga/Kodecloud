const chevronRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

export default function LienpageKodecloud() {
  return (
    <>
      <section>
        <div className="flex items-center capitalize">
          <span className="text-gray-400 text-sm Portable:text-xs">courses</span>
          <span className="flex items-center text-gray-600 text-sm Portable:text-xs">
            {chevronRight} gitHub actions
          </span>
        </div>
      </section>
    </>
  );
}
