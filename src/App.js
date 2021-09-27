import React from "react";
import Header from "./components/Header";
import ContentContainer from "./components/ContentContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="flex flex-col h-screen justify-between">
      <Header />
      <ContentContainer />
      <Footer />
    </main>
  );
}

export default App;
