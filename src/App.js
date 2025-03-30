import './App.scss';
import Forecast from './Components/Sections/Forecast/Forecast';
import MainInfo from './Components/Sections/MainInfo/MainInfo';
import Navbar from './Components/Sections/Navbar/Navbar';
import { useTheme } from './Context/themeContext';
import styled from 'styled-components';
import { WeatherContextProvider } from './Context/weatherInfoContext';
import { ForecastContextProvider } from './Context/forecastContext';
import { SearchContextProvider } from './Context/searchContext';
import { useResultState } from './Context/resultStateContext';
import Error from './Components/Features/ErrorPage/Error';


function App() {
  const { theme } = useTheme();
  const {error} = useResultState();
  return (
    <SearchContextProvider>

      <Container theme={theme}>
        <div className='dashboard'>
          <Navbar></Navbar>
          <WeatherContextProvider>
           <ForecastContextProvider>
            <MainInfo />
            <Forecast />
            {error && <Error/>}
           </ForecastContextProvider>
          </WeatherContextProvider>
        </div>
      </Container>
    </SearchContextProvider>
  );
}

export default App;


const Container = styled.div(({ theme }) => `
    min-height: 100vh;
    background: ${theme == 'light' ? 'linear-gradient(to right, white, grey)' : 'linear-gradient(to right, #444444, #181818)'};
    color: ${theme == 'light' ? 'black' : 'white'};
  `);
