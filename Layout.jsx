import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
     return (
          <div>
               <header className="app-header">
                    <div className="inside-header">
                         <Link to="/" className="brand">
                              Tiraz Studio
                         </Link>
                         <nav className="main-nav">
                              <Link to="/">Dashboard</Link>
                              <Link to="/orders">Orders</Link>
                              <Link to="/orders/new">New Quote</Link>
                              <Link to="/materials">Materials</Link>
                         </nav>
                    </div>
               </header>

               <main className="app-main">
                    <Outlet />
               </main>
          </div>
     );
}

export default Layout;