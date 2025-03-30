import "./App.scss";
import Forecast from "./Components/Sections/Forecast/Forecast";
import MainInfo from "./Components/Sections/MainInfo/MainInfo";
import Navbar from "./Components/Sections/Navbar/Navbar";
import { useTheme } from "./Context/themeContext";
import styled from "styled-components";
import { WeatherContextProvider } from "./Context/weatherInfoContext";
import { ForecastContextProvider } from "./Context/forecastContext";
import { SearchContextProvider } from "./Context/searchContext";
import { useResultState } from "./Context/resultStateContext";
import Error from "./Components/Features/ErrorPage/Error";

function App() {
  const { theme } = useTheme(); //getting current theme from custom theme hook
  const { error } = useResultState(); //getting global error from custom result state hook
  return (
    <Container theme={theme}>
      <SearchContextProvider>
        <div className="dashboard">
          {/* navbar holding theme toggle, search bar  */}
          <Navbar></Navbar>

          <WeatherContextProvider>
            <ForecastContextProvider>
              {/* component to provide main Info about current weather */}
              <MainInfo />
              {/* component to provide forecast details  */}
              <Forecast />
              {/* error component gets displayed when theres error in either weather or forecasting function  */}
              {error && <Error />}
            </ForecastContextProvider>
          </WeatherContextProvider>
        </div>
      </SearchContextProvider>
    </Container>
  );
}

export default App;

//using styled component to manage theme effectively
const Container = styled.div(
  ({ theme }) => `
    min-height: 100vh;
    background: ${
      //setting background as liner fradient based on theme
      theme === "light"
        ? "linear-gradient(to right, white, grey)"
        : "linear-gradient(to right, #444444, #181818)"
    };
    color: ${theme === "light" ? "black" : "white"};
  `
);
