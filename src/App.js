// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Language
import { LangProvider } from "./context/langContext";
// ----------------------------------------------------------------------

export default function App() {
  return (
    <>
      <LangProvider>
        <ThemeProvider>
          <ScrollToTop />
          <BaseOptionChartStyle />
          <Router />
        </ThemeProvider>
        
        <ToastContainer />
      </LangProvider>
    </>
  );
}
