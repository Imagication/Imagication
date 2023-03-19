import MobileNavbar from './navbar/MobileNavbar.js'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import "@fontsource/montserrat";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './Pages/Landing.js'


function App() {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'montserrat',
      },
    },
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
    </ThemeProvider>

  );
}

export default App;