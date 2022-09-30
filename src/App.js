import Greet from "./Arrow";
import "./styles.css";
import Welcome from "./Welcome";
import Car from "./Class";
import Message from "./State";
import Random from "./Random";
import Destructure from "./Destructure";
import ClassDest from "./ClassDest";
import ClickEvent from "./ClickEvent";
import ClassClick from "./ClassClickhandler";
import Form from "./Form";

export default function App() {
  return (
    <div className="App">
      <Welcome />
      <Greet name="Dileep" age="23" />
      {/* <Car name="Mercy" color="Black" />
      <Message />
      <Random />
      <Destructure name="Apple" rate="100kg" />
      <ClassDest name="Amit" age="24" />
      <ClickEvent /> */}
      {/* <ClassClick /> */}
      <Form />
    </div>
  );
}
