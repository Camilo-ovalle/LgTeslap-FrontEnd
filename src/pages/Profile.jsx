import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import { usrList } from "../api/data.js";
import { useNavigate } from "react-router-dom";
import "../styles/profile.css";

function Profile() {
  const { user, isAuthenticated, logOut } = useAppContext();
  const { id, name, email, phone, is_admin } = user;

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (isAuthenticated && is_admin) {
      usrList().then((res) => {
        setUsers(res.data);
      });
    }
  }, [isAuthenticated, is_admin]);

  const navigate = useNavigate();

  return (
    <>
      <div className="mainContent">
        <div className="mainProfileContainer">
          <div className="userProfile">
            <div className="img">
              <img src="src/assets/User_Icon.webp" alt="user profile image" />
            </div>
            <h1>{name}</h1>
          </div>
          <div className="profileData">
            <h1>{name}</h1>
            <h3>{email}</h3>
            <h3>{phone}</h3>
            <button
              onClick={async () => {
                await navigate("/");

                setTimeout(() => {
                  logOut();
                }, 1000);
              }}
            >
              Log Out
            </button>
          </div>
        </div>
        <div className="dataContainer">
          <table className="tabla">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            {users.map((user) => {
              return (
                <tbody>
                  <tr key={id}>
                    <td>{user.user_name}</td>
                    <td>{user.user_email}</td>
                    <td>{user.user_phone}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}

export default Profile;
