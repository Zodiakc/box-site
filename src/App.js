import { Container } from "@mui/system";
import FirstBlock from "./components/SiteBlocks/FirstBlock";
import SecondBlock from "./components/SiteBlocks/SecondBlock";
import DownloadBlock from "./components/SiteBlocks/DownloadBlock";
import FeedBlock from "./components/SiteBlocks/FeedBlock";
import LastBlock from "./components/SiteBlocks/LastBlock";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Container>
        <FirstBlock />
        <SecondBlock />
        <DownloadBlock />
        <FeedBlock />
        <LastBlock />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
