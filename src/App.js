import { useRoutes } from "react-router-dom";
import routes from './routes'
import Header from "./components/Header";

function App() {
  let router = useRoutes(routes)
  return (
    <div>
      <Header></Header>
      {router}
    </div>
  );
}

export default App;
