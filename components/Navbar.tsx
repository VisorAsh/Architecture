const Navbar = () => {
  return (
    <div className="text-black flex">
        <div className="w-1/3 font-k2d pl-6 pt-7 flex space-x-20 font-semibold">
            <a href="#" className="hover:underline">À Propos</a>
            <a href="#" className="hover:underline">Projets</a>
            <a href="#" className="hover:underline">Services</a>
        </div>
        <span className="w-1/3 py-6 font-monoton text-4xl uppercase text-center">Architecture</span>
        <div className="w-1/3 flex justify-end items-center">
            <span className="bg-beige px-10 py-6 text-xl font-k2d font-semibold cursor-pointer hover:bg-opacity-80">Nous contacter</span>
        </div>
    </div>
  )
}

export default Navbar;
