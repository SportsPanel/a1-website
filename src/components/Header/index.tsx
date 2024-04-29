
import React from "react"
import { NavLink } from "react-router-dom"



const Header: React.FC<any> = () => {
    return(
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-black px-10 py-4">
        <div className="flex flex-wrap flex-row items-center justify-between mx-auto max-w-screen-xl">
        <h1 className="text-primary font-bold text-3xl">A1 Sports</h1>
              <ul className="flex flex-row font-normal">
                <li>
                    <NavLink to="/" className={({isActive}) => 
                        `block py-2 pr-4 pl-3 duration-200 ${
                            isActive ? "text-primary" : "text-white hover:text-gray"
                        } `}>
                         About Us                      
                    </NavLink>
                </li>
                
              </ul>
           </div>
      </nav>
    </header>
    )
}

export default Header