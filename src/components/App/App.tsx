import BalykSection from "components/BalykSection";
import Footer from "components/Footer";
import Header from "components/Header";
import LastSection from "components/LastSection";
import ReviewsSection from "components/ReviewsSection";
import SausagesSection from "components/SausagesSection";
import StartSection from "components/StartSection";
import WhipsSection from "components/WhipsSection";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <StartSection />
        <WhipsSection />
        <SausagesSection />
        <BalykSection />
        <ReviewsSection />
        <LastSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
