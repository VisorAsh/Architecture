const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-8 bg-black py-12">
        <h3 className="w-1/3 font-monoton text-3xl uppercase text-center">Architecture</h3>
        <div className="flex justify-center items-center space-x-20 font-k2d font-medium">
            <a href="#" className="hover:underline">À Propos</a>
            <a href="#" className="hover:underline">Projets</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Contacts</a>
        </div>
        <div className="flex flex-col justify-center items-center space-y-6 font-k2d font-semibold">
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">LinkedIn</a>
            <a href="#" className="hover:underline">TikTok</a>
            <a href="#" className="hover:underline">Facebook</a>
        </div>
        <hr className="w-1/3" />
        <p className="font-k2d font-medium">© Copyright 2024, All Rights Reserved. Design and Develop by <a href="https://hishaam-portfolio-2024.vercel.app/" className="underline uppercase hover:font-bold">Hishaam</a></p>
    </div>
  )
}

export default Footer;
