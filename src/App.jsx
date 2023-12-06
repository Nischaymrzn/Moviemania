import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Screen2, { showsDetailsLoader } from "./Pages/Screen2";
import Screen3 from "./Pages/Screen3";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<Screen2 />} loader={showsDetailsLoader} />
      <Route path="/screen3" element={<Screen3 />} />
    </Route>
  )
);
function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
