import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import classes from "./App.css";
import RootLayout from "./pages/root";
import MarvelCharList from "./components/marvel-characters-list/MarvelCharList";
import MarvelCharDetails from "./components/marvel-character-details/MarvelCharDetails";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import FavCharsList from "./components/favourite-chars-list/favourite-characters-list";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/marvel/characters/list", element: <MarvelCharList /> },
      {
        path: "marvel/characters/details/:charId",
        element: <MarvelCharDetails />,
      },
      { path: "marvel/fav/chars/list", element: <FavCharsList /> },
    ],
  },
]);

function App() {
  return (
    <>
      {/* <button onClick={updateTheme}>Update Theme</button> */}
      <h2 className={classes.h2}>Welcome to App page</h2>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
