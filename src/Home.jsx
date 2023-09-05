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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            beatae facilis eveniet maxime eius iste nostrum id accusantium
            tempora tenetur quibusdam sapiente ipsa consequuntur perferendis
            ipsam esse ducimus asperiores assumenda itaque nobis magni cum
            animi! Eligendi delectus ea laudantium eos?
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
