import { useRoutes } from "react-router-dom";
import routes from './routes'
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar"
import MobileMenuContext from "./context/MobileMenuContext";
import { useState } from "react";


function App() {
  const router = useRoutes(routes)
  const [mobileMenu, setMobileMenu] = useState(false)
  return (
    <div>
      <MobileMenuContext.Provider value={{ mobileMenu, setMobileMenu }}>
        <Header></Header>
        <main className="flex">
          {/* sidebar */}
          <Sidebar></Sidebar>
          {/* main wrapper */}
          <div className="basis-full lg:basis-4/5 lg:ml-auto px-3 sm:px-6 overflow-auto">
            {router}
          </div>
        </main>
      </MobileMenuContext.Provider>
    </div>
  );
}

export default App;
