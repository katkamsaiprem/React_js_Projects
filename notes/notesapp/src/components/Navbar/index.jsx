import logo from "../../assets/logo.png";

export const Navbar = () => {
  return (
    <>
      <header className="flex px-3 py-1 gap-1 border-r-2 border-gray-900 border-b-2 w-full">
        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
          <img className="w-full h-full" src={logo} alt="logo" />
        </div>
        <h1 className="text-blue-400 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Noteit</h1>
      </header>
    </>
  );
};
