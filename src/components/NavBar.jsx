import Button from "../components/Buttons";
import "../styles/navBar.css";

function navBar() {
  return (
    <>
      <nav className="navBar">
        <a className="title" href="http://localhost:5173">
          LgTeslap
        </a>
        <div className="btnContainer">
          <Button title="Login" href="http://localhost:5173/login" />
          <Button title="Register" href="http://localhost:5173/register" />
        </div>
      </nav>
    </>
  );
}

export default navBar;
