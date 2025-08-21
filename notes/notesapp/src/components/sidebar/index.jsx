import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <aside className="flex flex-col gap-3 p-8 border-r-2 border-gray-900 h-screen w-[160px]">
        <Link to="/" className="flex items-center gap-2">
          <span className="material-icons-outlined">
            home
          </span>
          Home
        </Link>

        <Link to="/Archive" className="flex items-center gap-2">
          <span className="material-icons-outlined">
            archive
          </span>
          Archive
        </Link>

        <Link to="/important" className="flex items-center gap-2">
          <span className="material-icons-round">
            label_important_outline
          </span>
          Important
        </Link>

        <Link to="/bin" className="flex items-center gap-2">
          <span className="material-icons-round">
            delete_outline
          </span>
          Bin
        </Link>
      </aside>
    </>
  );
};
