import logo from "../../assets/logo.png";

export const Navbar = () => {
  return (
    <>
      <header className="flex px-3 py-1 gap-1 border-r-2 border-gray-900 border-b-2">
        <div className="w-12 h-12">
          <img className="w-full h-full" src={logo} alt="logo" />
        </div>
        <h1 className="text-indigo-800  font-bold text-4xl ">Noteit</h1>
      </header>
    </>
  );
};
