import { createTheme, ThemeProvider } from "@mui/material";

// Imports from another files
import { Header, HeroSection, HowItWorks } from "./Components";
// import Footer from "./Components/Footer";

function App() {
  const theme = createTheme({
    components:{
      MuiButton:{
        defaultProps:{
          disableRipple: true
        }
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HeroSection />
      <HowItWorks />
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
