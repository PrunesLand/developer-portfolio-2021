import { createTheme, ThemeProvider } from "@material-ui/core";
import Navigation from "./Components/Navigation";
import Intro from "./Pages/intro/Intro";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Story from './Pages/story/Story'
import Experience from './Pages/experience/Experience'
import Contact from './Pages/contact/Contact'

const theme = createTheme({
  palette: {
    primary: {
      main: '#9fa8da',
      light: '#d1d9ff',
      dark: '#6f79a8'
    },
    secondary: {
      main: '#9fc5da',
      light: '#d1f8ff',
      dark: '#6f94a8'

    }

  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Poppins',
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
            <Route path="/story">
              <Story />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Navigation>
      </Router>
    </ThemeProvider>
  );
}

export default App;
