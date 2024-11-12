import { useRoutes } from "react-router-dom";
import routes from './routes'

function App() {
  let router = useRoutes(routes)
  console.log(router);

  return (
    <>
      {router}
    </>
  );
}

export default App;
