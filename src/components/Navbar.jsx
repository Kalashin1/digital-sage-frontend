import { Link } from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion/dist/es/index"

export default function Navbar (){
  let lists = [ 'home', 'contact', 'about', 'categories', 'signup', 'login' ]

  const [showNav, toggleShowNav] = useState(true)

  const list = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -1000  },
  }
  
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }
  

  return (
    <nav className="flex flex-col md:flex-row md:px-2 bg-gray-900 text-white font-bold justify-between shadow fixed w-full z-10">
      <div className="grid grid-cols-5">
        <button className="text-6xl p-2 md:py font-bold text-left grid col-span-4">
          Digital Sage
        </button>
        <button onClick={e => toggleShowNav(!showNav)} className="sm:hidden">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      
      { showNav && (
          <motion.ul className="md:flex md:flex-row flex-col"
           initial="hidden"
           animate="visible"
           variants={list}
          >
            { lists.map(l => (
              <motion.li key={l} variants={item}>
                <Link to={l} className="block hover:bg-gray-600 transition px-4 py-5 text-2xl capitalize">{l}</Link>
              </motion.li>
            ))}
          </motion.ul>
      ) }
    </nav>
  )
} 