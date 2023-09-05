import Button from "../components/Buttons";
import { DEV_DOMAIN } from "../config.js";
import "../styles/navBar.css";

function navBar() {
  return (
    <>
      <nav className="navBar">
        <a className="title" href="/">
          LgTeslap
        </a>
        <div className="btnContainer">
          <Button title="Login" href={`${DEV_DOMAIN}/login`} />
          <Button title="Register" href={`${DEV_DOMAIN}/register`} />
        </div>
      </nav>
    </>
  );
}

export default navBar;
