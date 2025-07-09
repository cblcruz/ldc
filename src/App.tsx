import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GetStarted from './pages/GetStarted';
import Solutions from './pages/Solutions';
import LogManagement from './pages/capabilities/LogManagement';
import ObservabilitySolutions from './pages/capabilities/ObservabilitySolutions';
import CybersecurityInsights from './pages/capabilities/CybersecurityInsights';
import CriblConsulting from './pages/services/cribl/CriblConsulting';
import CriblEnablement from './pages/services/cribl/CriblEnablement';
import CriblActivations from './pages/services/cribl/CriblActivations';
import CriblPackDevelopment from './pages/services/cribl/CriblPackDevelopment';
import SplunkConsulting from './pages/services/splunk/SplunkConsulting';
import SplunkEnablement from './pages/services/splunk/SplunkEnablement';
import SplunkActivations from './pages/services/splunk/SplunkActivations';
import SplunkAppDevelopment from './pages/services/splunk/SplunkAppDevelopment';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7B3FE4',
    },
    background: {
      default: '#121212',
      paper: '#121212',    
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/capabilities/log-management" element={<LogManagement />} />
          <Route path="/capabilities/observability-solutions" element={<ObservabilitySolutions />} />
          <Route path="/capabilities/cybersecurity-insights" element={<CybersecurityInsights />} />
          <Route path="/services/cribl/consulting" element={<CriblConsulting />} />
          <Route path="/services/cribl/enablement" element={<CriblEnablement />} />
          <Route path="/services/cribl/activations" element={<CriblActivations />} />
          <Route path="/services/cribl/pack-development" element={<CriblPackDevelopment />} />
          <Route path="/services/splunk/consulting" element={<SplunkConsulting />} />
          <Route path="/services/splunk/enablement" element={<SplunkEnablement />} />
          <Route path="/services/splunk/activations" element={<SplunkActivations />} />
          <Route path="/services/splunk/app-development" element={<SplunkAppDevelopment />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/solutions" element={<Solutions />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
