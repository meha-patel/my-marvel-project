import {createBrowserRouter, RouterProvider} from "react-router-dom";
import classes from "./App.css";
import RootLayout from "./pages/root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import MarvelCharacterList from "./pages/MarvelCharacterList";
import FavouriteCharacterList from "./pages/FavouriteCharacterList";
import MarvelCharacterDetails from "./pages/MarvelCharacterDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {path: "/", element: <HomePage />},
      {path: "/marvel/characters/list", element: <MarvelCharacterList />},
      {
        path: "marvel/characters/details/:charId",
        element: <MarvelCharacterDetails />,
      },
      {path: "marvel/fav/chars/list", element: <FavouriteCharacterList />},
    ],
  },
]);

function App() {
  return (
    <>
      <h2 className={classes.h2}>Welcome to App page</h2>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
