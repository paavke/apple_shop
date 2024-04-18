import React from "react";
import "./App.css";
import Card from "./Card";

function App() {
  // Example data
  const data = {
    brand: "Apple",
    href: "/mfp/9623007/apple-iphone-15?pid=11517874360",
    title: "Apple iPhone 11 128 Go Double SIM Noir Sidéral",
    newPrice: "754 € ", 
    newLabel: "Neuf",   
    usedLabel: "Occasion dès",
    usedPrice: " 720,99 €",
    image: "https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg",
  };

  return (
    <div className="App">
      <Card data={data} />
    </div>
  );
}

export default App;
