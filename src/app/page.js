import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="main">
    <div className="container-1">
    <div className="card">
      <span id="Jhon">Jhon</span>
      <span id="Doe"> Doe</span>
      <div>
        <p>Designer</p>
        <img src="phone.svg"></img>
        <span> 000-123-456-7890</span>
        <img src="email"></img>
        <span> email@yourdomain.com</span>
        <img src="Group.svg"></img>
        <span>Your address goes here
        125 Street, USA</span>

      </div>
      <div className="container-2">
        <img src="blue.svg"></img>
        <img src="yellow.svg"></img>
        <img src="purple.svg"></img>
        <img src="black.svg"></img>

      </div>
    </div>
    </div>
  </div>
  );
}
