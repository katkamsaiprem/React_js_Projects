import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();
  
  return (
    <>
      <aside className="flex flex-col gap-3 p-2 sm:p-4 md:p-6 lg:p-8 border-r-2 border-gray-900 h-screen w-12 sm:w-16 md:w-32 lg:w-[160px]">
        <Link to="/" className={`flex items-center gap-1 sm:gap-2 p-1 rounded transition-colors ${location.pathname === '/' ? 'bg-blue-100' : 'hover:bg-blue-100'}`}>
          <span className="material-icons-outlined text-sm sm:text-base">
            home
          </span>
          <span className="hidden md:inline text-xs lg:text-base">Home</span>
        </Link>

        <Link to="/Archive" className={`flex items-center gap-1 sm:gap-2 p-1 rounded transition-colors ${location.pathname === '/Archive' ? 'bg-blue-100' : 'hover:bg-blue-100'}`}>
          <span className="material-icons-outlined text-sm sm:text-base">
            archive
          </span>
          <span className="hidden md:inline text-xs lg:text-base">Archive</span>
        </Link>
        <Link to="/bin" className={`flex items-center gap-1 sm:gap-2 p-1 rounded transition-colors ${location.pathname === '/bin' ? 'bg-blue-100' : 'hover:bg-blue-100'}`}>
          <span className="material-icons-round text-sm sm:text-base">
            delete_outline
          </span>
          <span className="hidden md:inline text-xs lg:text-base">Bin</span>
        </Link>
      </aside>
    </>
  );
};
