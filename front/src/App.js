import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './css/style.css';
import './css/home.css';
import Root from "./Root";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
