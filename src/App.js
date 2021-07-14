import { createTheme, ThemeProvider } from "@material-ui/core";
import Navigation from "./Components/Navigation";
import Intro from "./Pages/Intro";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Story from './Pages/Story'
import Experience from './Pages/Experience'
import Contact from './Pages/Contact'

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
      <Router>
        <Navigation>
          <Switch>
            <Route exact path="/">
              <Intro />
            </Route>
            <Route exact path="/story">
              <Story />
            </Route>
            <Route exact path="/experience">
              <Experience />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Navigation>
      </Router>
    </ThemeProvider>
  );
}

export default App;
