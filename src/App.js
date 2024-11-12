import { useRoutes } from "react-router-dom";
import routes from './routes'
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar"

function App() {
  let router = useRoutes(routes)
  return (
    <div>
      <Header></Header>
      <main className="flex">
        {/* sidebar */}
        <Sidebar></Sidebar>
        {/* main wrapper */}
        <div className="basis-4/5 px-3 sm:px-6 ">
          {router}
        </div>
      </main>

    </div>
  );
}

export default App;
