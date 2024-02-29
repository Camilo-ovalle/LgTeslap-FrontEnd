import Cards from "./components/Cards";
import { DEV_DOMAIN } from "./config.js";
import "./styles/home.css";

function Home() {
  return (
    <>
      <div className="mainContainer">
        <div className="container">
          <h1>Welcome to LgTeslap login manager </h1>
          <p className="p">
            "LgTeslap" is a personalized transportation company based in Bogotá
            that offers a comprehensive range of services for transporting
            individuals. The company is in need of a tool to assist in managing
            information related to their clients and services.
          </p>
          <div className="cardsContainer">
            <Cards
              title="Admins"
              body="Use this option if you are an administrator"
              href={`${DEV_DOMAIN}/login`}
            />
            <Cards
              title="Company"
              body="Use this option if you represents a company"
              href={`${DEV_DOMAIN}/login`}
            />
            <Cards
              title="Users"
              body="Use this option if you are a natural user"
              href={`${DEV_DOMAIN}/login`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
