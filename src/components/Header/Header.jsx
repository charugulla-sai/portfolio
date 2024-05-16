import Navbar from '../Navbar/Navbar';

function Header() {
  return (
    <header className="  mb-3">
      <div className="max-w-[1200px] flex justify-between items-center py-3 px-5 mx-auto">
        <h1 className=" font-extrabold text-xl">Sai.dev</h1>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
