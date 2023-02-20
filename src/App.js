import React, { Component } from "react";
import bruxa from "./img/bruxa.png";
import fada from "./img/fada.png";
import fantasma from "./img/fantasma.png";
import zumbi from "./img/zumbi.png";
import pirata from "./img/pirata.png";
import vampiro from "./img/vampiro.png";
import "./App.css";

class App extends Component {
  state = {
    figure: [
      {
        imagem: `${bruxa}`,
        titulo: "Bruxa",
      },
      {
        imagem: `${fantasma}`,
        titulo: "Fantasma",
      },
      {
        imagem: `${vampiro}`,
        titulo: "Vampiro",
      },
      {
        imagem: `${zumbi}`,
        titulo: "Zumbi",
      },
      {
        imagem: `${fada}`,
        titulo: "Fada",
      },
      {
        imagem: `${pirata}`,
        titulo: "Pirata",
      },
    ],
  };

  render() {
    return (
      <main>
        <h1>Carnaval VnW</h1>
        <section className="map">
          {this.state.figure.map((item) => (
            <div className="box">
              <img src={item.imagem} alt={item.titulo} />
              <h2>{item.titulo}</h2>
            </div>
          ))}
        </section>
      </main>
    );
  }
}

export default App;
