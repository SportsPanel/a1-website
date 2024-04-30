
import React from "react"

const Header: React.FC<any> = () => {

   const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({behavior: "smooth"})
    }
   }
   
    return(
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-black px-10 py-4">
        <div className="flex flex-wrap flex-row items-center justify-between mx-auto max-w-screen-xl">
        <h1 className="text-primary font-bold text-3xl">A1 Sports</h1>
              <ul className="flex flex-row font-normal">
                <li>
                    <a 
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("about")
                    }}
                    className="block py-2 pr-4 pl-3 duration-200 text-white hover:text-gray">
                         About Us                      
                    </a>
                </li>
              </ul>
           </div>
      </nav>
    </header>
    )
}

export default Header