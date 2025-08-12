import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <aside className="flex flex-col gap-3 p-8 border-r-2 border-gray-900 h-screen w-[160px]">
        <Link to="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined">home</span>
          Home
        </Link>
        <Link to="/important" className="flex items-center gap-2">
          <span className="material-symbols-outlined">label_important</span>
          Important
        </Link>
        <Link to="/archive" className="flex items-center gap-2">
          <span className="material-symbols-outlined">archive</span>Archive
        </Link>
        <Link to="/bin" className="flex items-center gap-2">
          <span className="material-symbols-outlined">delete</span>Bin
        </Link>
      </aside>
    </>
  );
};
