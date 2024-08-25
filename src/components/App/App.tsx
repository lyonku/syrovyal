import { useState } from "react";
import BalykSection from "components/BalykSection";
import Footer from "components/Footer";
import Header from "components/Header";
import LastSection from "components/LastSection";
import ReviewsSection from "components/ReviewsSection";
import SausagesSection from "components/SausagesSection";
import StartSection from "components/StartSection";
import WhipsSection from "components/WhipsSection";
import Modal from "components/Modal";
import { LinksType } from "types";
import { setInert } from "helpers";

import "./App.scss";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalLinks, setModalLinks] = useState({ ozon: "", wildberries: "" });

  const openModal = (links: LinksType) => {
    setModalOpen(true);
    setModalLinks(links);
    setInert();
  };

  return (
    <div className="App">
      <Header />
      <main className="main">
        <StartSection />
        <WhipsSection openModal={openModal} />
        <SausagesSection openModal={openModal} />
        <BalykSection openModal={openModal} />
        <ReviewsSection />
        <LastSection />
      </main>
      <Footer />
      <Modal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        modalLinks={modalLinks}
      />
    </div>
  );
}

export default App;
