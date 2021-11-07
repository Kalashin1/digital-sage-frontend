import Sidebar from "./Sidebar"
import Navbar from "./Navbar"


export default function Layout ({ children }) {
  return(
    <div>
      <Navbar />
      <article className="grid xl:grid-cols-4 grid-cols-1 grid-gap">
        <div className="grid col-span-1">
          <Sidebar></Sidebar>
        </div>
        <div className="grid xl:col-span-3">
          { children }
        </div>
      </article>
    </div>
  )
}