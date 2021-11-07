export default function Sidebar () {
  return (
    <aside className="bg-gray-700 px-6 h-screen fixed top-16 hidden xl:block">
      <h1 className="sidebar-title">categories</h1>
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
          <span className="sidebar-menu-item-text">Software Engineering</span>
          <i className="fas fa-code sidebar-menu-item-icon"></i>
        </li>
      </ul>

      {/* <h1 className="sidebar-title">Hot Articles</h1>
      <ul>
        <li className="sidebar-menu-item">Intro To CSS</li>
      </ul> */}
    </aside>
  )
}