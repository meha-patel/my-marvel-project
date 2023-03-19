import {createBrowserRouter, RouterProvider} from "react-router-dom";
import classes from "./App.css";
import RootLayout from "./pages/root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import MarvelCharacterList from "./pages/MarvelCharacterList";
import FavouriteCharacterList from "./pages/FavouriteCharacterList";
import MarvelCharacterDetails from "./pages/MarvelCharacterDetails";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
