import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import MarvelCharacterList from "./pages/MarvelCharacterList";
import FavouriteCharacterList from "./pages/FavouriteCharacterList";
import MarvelCharacterDetails from "./pages/MarvelCharacterDetails";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./authentication/Login/login";
import Register from "./authentication/Register/register";
import Reset from "./authentication/Reset/reset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/reset", element: <Reset /> },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/marvel/characters/list",
        element: <MarvelCharacterList />,
      },
      {
        path: "marvel/characters/details/:charId",
        element: <MarvelCharacterDetails />,
      },
      {
        path: "marvel/fav/chars/list",
        element: <FavouriteCharacterList />,
      },
    ],
  },
]);

function App() {
  const activeTheme = useSelector((state) => state?.theme);

  const darkTheme = createTheme({
    palette: {
      mode: activeTheme.theme,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
