import Image from "next/image";
import styles from "./page.module.css";

function Card() {
  return (
    <div>
      <div className="cards">
        <div className="name-flex">
          <p className="Jhon">Oyunbat</p>
          <p className="Doe"> Oyunbat</p>
        </div>
        <p className="job">Designer</p>

        <div className="address-flex">
          <div>
            <img src="phone.svg"></img>
            <span> 90098070</span>
          </div>
          <div>
            <img src="email.svg"></img>
            <span> email@oyunbatdomain.com</span>
          </div>
          <div>
            <img src="Group.svg"></img>
            <span>Your address goes here <br />
              125 Street, USA</span>
          </div>
        </div>
        <img className="shape" src="Shape.png"></img>

        <img className="logo" src="Logo.svg"></img>
        <p className="co-name">Pinecone Academy </p>

        <img className="qr" src="QR.svg"></img>



      </div>
    </div>
  );
}
export default function Home() {
  const cards = [];
  for (let i = 0; i < 18; i++) {
    cards.push(<Card></Card>)
  }
  return (<div>{cards}</div>

  );
}




