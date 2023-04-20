import "./App.css";

import reklameImage from "./images/laptop kopier.png";
import reklameimageekstra from "./images/lenti show.png";
import roadmap from "./images/gl media road map.svg";
import bjørn from "./images/bear standing at pc.svg";
import bjørn2 from "./images/bjørn globus.svg";
import os1 from "./images/chris.jpg";
import os2 from "./images/Frederik.jpg";
import os3 from "./images/Nichlas.jpg";
import os4 from "./images/Erik.jpg";

import Navigation from "./components/Nav";
import Footer from "./components/Footer.js";

import Lottie from "lottie-react";
import anim1 from "./lotties/bear-wawing.json";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        {/*hjem section*/}
        <section id="Hjem" className="Hjem">
          <div className="hjem-content">
            <div className="hjem-box">
              <h1 className="hjem-heading">Velkommen</h1>
              <p className="hjem-text">
                Grizzly Media er et webbureau, der specialiserer sig i at
                udvikle hjemmesider med fokus på at reducere deres
                miljøpåvirkning så meget som muligt. Ved hjælp af innovative
                teknologier og bæredygtige løsninger skaber Grizzly Media ikke
                kun smukke og funktionelle hjemmesider, men også miljøvenlige og
                ansvarlige digitale platforme.
              </p>
            </div>

            <div className="hjem-bjørn">
              <Lottie
                className="hjem-bjørn-lottie"
                animationData={anim1}
                loop={true}
                height={800}
                width={1000}
                style={{
                  top: "10px",
                  left: "10px",
                }}
              />
            </div>
            <div className="hjem-blob"> </div>
            <div className="hjem-blob2"> </div>
          </div>
        </section>

        {/*reklame section*/}
        <section className="reklame-section">
          <div className="reklame-content">
            <div className="reklame-image-container">
              <img src={reklameImage} alt="Reklame" className="reklame-image" />
            </div>
            <div className="reklame-text-container">
              <h1 className="reklame-heading">Vi laver responsive</h1>
              <p className="reklame-text">
                Vores webbureau specialiserer sig i at skabe responsive
                hjemmesider, der fungerer optimalt på en række forskellige
                enheder, herunder mobiltelefoner, tablets og computere. Vi
                fokuserer på at sikre en ensartet og brugervenlig oplevelse på
                tværs af alle platforme, så vores kunder kan nå ud til deres
                publikum uanset, hvordan de vælger at besøge deres hjemmeside.
              </p>
              <button className="reklame-button">Book nu</button>
            </div>

            <div className="reklame-overlap-image-container">
              <img
                src={reklameimageekstra}
                alt="reklame-image2"
                className="reklame-image2"
              />
            </div>
          </div>
        </section>

        {/*vision section*/}
        <section id="Vision" className="Vision">
          <img src={roadmap} alt="roadmap" className="roadmap" />
        </section>

        {/*priser section*/}
        <section className="priser-section" id="priser-section">
          <h1 className="pris-liste-header">Produkt pakker</h1>
          <div className="priser-boxes-container">
            <div className="priser-box light-brown">
              <h2>One page</h2>
              <p>
                Vores “one page” produkt er en hjemmeside, der kun består af én
                side, hvor alle oplysninger om dit firma præsenteres. Dette
                produkt kan være ideelt til et firma, der ikke har så mange
                produkter, eller til en nystartet virksomhed. Vi inkluderer 24/7
                live support i alle vores produkt pakker, og vi stræber efter at
                skabe præcis den hjemmeside, du drømmer om.
              </p>
              <h2>Pris: Fra 5000kr,-</h2>
              <button className="priser-button">Book nu </button>
            </div>
            <div className="priser-box light-brown">
              <h2>Multi-Page</h2>
              <p>
                Et produkt med 2-3 undersider, der giver mere plads til at
                udforske og organisere dit indhold på en overskuelig måde. God
                for mellemstore virksomheder der har brug for lidt mere plads.
                Vi inkluderer 24/7 live support i alle vores produkt pakker, og
                vi stræber efter at skabe præcis den hjemmeside, du drømmer om.
              </p>
              <h2>Pris: Fra 6500kr,-</h2>
              <button className="priser-button">Book nu</button>
            </div>
            <div className="priser-box light-brown">
              <h2>Flex-Page</h2>
              <p>
                Et produkt med 4-6 undersider, der giver en fleksibel og
                tilpasselige løsning til din virksomheds behov for at præsentere
                mere indhold og funktioner. Vi inkluderer 24/7 live support i
                alle vores produkt pakker, og vi stræber efter at skabe præcis
                den hjemmeside, du drømmer om.
              </p>
              <h2>Pris: Fra 8000kr,-</h2>
              <button className="priser-button">Book nu</button>
            </div>
            <div className="priser-box light-brown">
              <h2>Infinite-Page</h2>
              <p>
                Et produkt med ubegrænsede undersider, der tillader dig at skabe
                en kompleks og omfattende hjemmeside med masser af indhold og
                muligheder. Vi inkluderer 24/7 live support i alle vores produkt
                pakker, og vi stræber efter at skabe præcis den hjemmeside, du
                drømmer om.
              </p>
              <h2>Pris: Fra 10.000kr,-</h2>
              <button className="priser-button">Book nu</button>
            </div>
          </div>
        </section>

        {/*værdier section*/}
        <section id="Values" className="Values">
          <div className="values-content">
            <div className="values-bjørn">
              <img src={bjørn} alt="Bjørn" className="values-bjørn-img" />
            </div>

            <div className="values-box">
              <h1 className="values-heading">Vores Værdier</h1>
              <p className="values-text">
                1. Bæredygtighed: <br></br> Vi har en forpligtelse til at
                minimere vores miljøpåvirkning og udvikle bæredygtige digitale
                løsninger.
                <br></br> <br></br>
                2. Innovation: <br></br> Vi er altid på udkig efter nye og
                innovative måder at skabe smukke og funktionelle hjemmesider på,
                der samtidig er miljøvenlige.
                <br></br> <br></br>
                3. Kvalitet: <br></br> Vi stræber efter at levere den højeste
                kvalitet i alt, hvad vi gør, fra vores design til vores
                kundeservice.
                <br></br> <br></br>
                4. Ansvarlighed: <br></br> Vi tager ansvar for vores handlinger
                og arbejder hårdt for at være en positiv kraft i vores samfund
                og i verden som helhed.
              </p>
            </div>
          </div>
          {/*værdier section 2*/}
          <div class="values2-content">
            <div class="values2-box">
              <h1 class="values2-heading">Om Firmaet</h1>
              <p class="values2-text">
                Grizzly Media er et webbureau, der specialiserer sig i at
                udvikle hjemmesider med fokus på at reducere deres
                miljøpåvirkning så meget som muligt.<br></br> <br></br> Ved
                hjælp af innovative teknologier og bæredygtige løsninger skaber
                Grizzly Media ikke kun smukke og funktionelle hjemmesider, men
                også miljøvenlige og ansvarlige digitale platforme.
              </p>
            </div>
            <div class="values2-bjørn2">
              <img src={bjørn2} alt="Bjørn2" class="values2-bjørn2-img" />
            </div>
          </div>
        </section>

        {/*info section*/}
        <section id="Os" className="Os">
          <div className="os-header">
            <h1 className="os-title">Mød teamet</h1>
          </div>
          <div className="os-content">
            <div className="os-box">
              <img src={os1} alt="Team member 1" className="os-img" />
              <h1 className="os-heading">Christian</h1>
              <p className="os-text">
                Christian er ung, ambitiøs og holder styr på virksomheden
              </p>
            </div>
            <div className="os-box">
              <img src={os2} alt="Team member 2" className="os-img" />
              <h1 className="os-heading">Frederik</h1>
              <p className="os-text">
                Frederik skaber de grafiske elementer og stræber efter en
                innovativ grafisk vinkel i alle projekter
              </p>
            </div>
            <div className="os-box">
              <img src={os3} alt="Team member 3" className="os-img" />
              <h1 className="os-heading">Nicklas</h1>
              <p className="os-text">
                Nicklas har greb om vores designprocess og er klar på at skabe
                en unik visuel identitet
              </p>
            </div>
            <div className="os-box">
              <img src={os4} alt="Team member 4" className="os-img" />
              <h1 className="os-heading">Erik</h1>
              <p className="os-text">
                Erik er vores nye praktikant som altid er klar på at feje, hente
                papir og skænke en kop kaffe
              </p>
            </div>
          </div>
        </section>

        {/*Footer*/}
        <Footer />
      </main>
    </div>
  );
}

export default App;
