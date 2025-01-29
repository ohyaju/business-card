import Image from "next/image";
import styles from "./page.module.css";
const users = [
{
firstName:"ursa",
lastName: "ursa",
role: "developer",
phoneNumber: "88968896",
email:"ursursa@gmail.com",
adress: "BZD 1khoroo 5-10",
companyName:"Meta",
},
{
  firstName:"baljan",
  lastName: "baljan",
  role: "developer",
  phoneNumber: "96567628",
  email:"baljukk@gmail.com",
  adress: "BZD 3khoroo 75-12",
  companyName:"ONDO",
},
{
  firstName:"chinguun",
  lastName: "chinguun",
  role: "developer",
  phoneNumber: "90178777",
  email:"chinguun@gmail.com",
  adress: "SBD 12khoroo 6-1",
  companyName:"Pranzo",
},
{firstName:"ariunjargal",
  lastName: "ariunjargal",
  role: "developer",
  phoneNumber: "88674545",
  email:"ariunjargal@gmail.com",
  adress: "KHUD 9khoroo 100-8",
  companyName:"Tesla",
}
]
function Card(props) {
  console.log(props);
  return (
    <div>
      <div className="cards">
        <div className="name-flex">
          <p className="firstName">{props.user.firstName}</p>
          <p className="lastName">{props.user.lastName}</p>
        </div>
        <p className="role">{props.user.role}</p>

        <div className="address-flex">
          <div>
            <img src="phone.svg"></img>
            <span>{props.user.phoneNumber}</span>
          </div>
          <div>
            <img src="email.svg"></img>
            <span className="email">{props.user.email}</span>
          </div>
          <div>
            <img src="Group.svg"></img>
            <span className="adress">{props.user.adress
              } <br />
</span>
          </div>
        </div>
        <img className="shape" src="Shape.png"></img>

        <img className="logo" src="Logo.svg"></img>
        <p className="companyName">Pinecone Academy </p>

        <img className="qr" src="QR.svg"></img>



      </div>
    </div>
  );
}
export default function Home() {
  const cards = [];
  for (let i = 0; i < users.length; i++) {
    cards.push(<Card user={users[i]}></Card>)
  }
  return (<div>{cards}</div>

  );
}




