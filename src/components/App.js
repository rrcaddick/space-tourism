import { createGlobalStyle } from "styled-components";
import { Switch, Route, useLocation } from "react-router-dom";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Home from "./pages/Home";
import HomeDesktop from "assets/home/background-home-desktop.jpg";
import HomeTablet from "assets/home/background-home-tablet.jpg";
import HomeMobile from "assets/home/background-home-mobile.jpg";
import DestinationDesktop from "assets/destination/background-destination-desktop.jpg";
import DestinationTablet from "assets/destination/background-destination-tablet.jpg";
import DestinationMobile from "assets/destination/background-destination-mobile.jpg";
import CrewDesktop from "assets/crew/background-crew-desktop.jpg";
import CrewTablet from "assets/crew/background-crew-tablet.jpg";
import CrewMobile from "assets/crew/background-crew-mobile.jpg";
import TechnologyDesktop from "assets/technology/background-technology-desktop.jpg";
import TechnologyTablet from "assets/technology/background-technology-tablet.jpg";
import TechnologyMobile from "assets/technology/background-technology-mobile.jpg";
import PageLayout from "./common/PageLayout";

const backgroundItems = {
  desktop: {
    home: HomeDesktop,
    destination: DestinationDesktop,
    crew: CrewDesktop,
    technology: TechnologyDesktop,
  },
  tablet: {
    home: HomeTablet,
    destination: DestinationTablet,
    crew: CrewTablet,
    technology: TechnologyTablet,
  },
  mobile: {
    home: HomeMobile,
    destination: DestinationMobile,
    crew: CrewMobile,
    technology: TechnologyMobile,
  },
};

const setBackground = (screen, { pathname }) => {
  switch (pathname) {
    case "/destination":
      return backgroundItems[screen].destination;
    case "/crew":
      return backgroundItems[screen].crew;
    case "/technology":
      return backgroundItems[screen].technology;
    default:
      return backgroundItems[screen].home;
  }
};

const GlobalStyle = createGlobalStyle`
  *, *::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    max-width: 100vw;
    min-height: 100vh;
    background-image: url(${setBackground.bind(null, "mobile")});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;

    @media (min-width: 768px) {
      background-image: url(${setBackground.bind(null, "tablet")});
    }

    @media (min-width: 1440px) {
      background-image: url(${setBackground.bind(null, "desktop")});
    }
  }
`;

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      <GlobalStyle pathname={pathname} />
      <PageLayout>
        <Switch>
          <Route path="/destination">
            <Destination />
          </Route>
          <Route path="/crew">
            <Crew />
          </Route>
          <Route path="/technology">
            <Technology />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </PageLayout>
    </>
  );
};

export default App;
