import { createTheme, ThemeProvider } from "@material-ui/core";
import Navigation from "./Components/Navigation";
import Intro from "./Pages/Intro";

const theme = createTheme({
  palette: {
    primary: {
      main: '#bdbdbd',
      light: '#efefef',
      dark: '#8d8d8d'
    },
    secondary: {
      main: '#455a64',
      light: '#718792',
      dark: '#1c313a'

    }

  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 400,
    fontWeightBold: 400,
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation>
        <Intro />
      </Navigation>
    </ThemeProvider>
  );
}

export default App;
