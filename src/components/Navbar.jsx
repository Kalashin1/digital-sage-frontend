import { Link } from "react-router-dom"
import { useState } from "react"

export default function Navbar (){
  let lists = [ 'home', 'contact', 'about', 'categories', 'signup', 'login' ]

  const [showNav, toggleShowNav] = useState(true)

  return (
    <nav className="flex flex-col md:flex-row md:px-2 bg-gray-900 text-white font-bold justify-between shadow fixed w-full z-10">
      <div className="grid grid-cols-5">
        <button className="text-6xl py-2 md:py font-bold text-left grid col-span-4">
          Digital Sage
        </button>
        <button onClick={e => toggleShowNav(!showNav)} className="sm:hidden">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      
      { showNav && (
        <ul className="md:flex md:flex-row flex-col">
          { lists.map(l => (
            <li key={l}>
              <Link to={l} className="block hover:bg-gray-600 transition px-4 py-5 text-2xl capitalize">{l}</Link>
            </li>
          ))}
        </ul>
      ) }
    </nav>
  )
} 