import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import usersApi from "../../api/user";
import PageLoader from "../../common/PageLoader";

const ShowUser = () => {
  const { id } = useParams();
  const [userLoading, setUserLoading] = useState(true);
  const [user, setUser] = useState("");
  const history = useHistory();

  const fetchUser = async () => {
    setUserLoading(true);
    try {
      const { data } = await usersApi.fetchUser(id);
      setUser({ ...data });
    } catch (err) {
      console.log(err);
    } finally {
      setUserLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (userLoading) {
    return <PageLoader />;
  }

  return (
    <div className="user">
      <div className="info">
        <img src={user.picture} alt={`${user.firstName} ${user.lastName}`} />

        <div className="details">
          <h1>{`${user.title[0].toUpperCase() + user.title.slice(1)} ${
            user.firstName
          } ${user.lastName}`}</h1>
          {user.gender === "male" && <i className="ri-men-fill"></i>}
          {user.gender === "female" && <i className="ri-women-fill"></i>}
          <p>
            <span>DOB:</span> {new Date(user.dateOfBirth).toLocaleDateString()}
          </p>
          <p>
            <span>Registered on: </span>
            {new Date(user.registerDate).toLocaleDateString()}
          </p>
          <p>
            <span>Phone:</span> {user.phone}
          </p>
          <p>
            <span>Email:</span> {user.email}
          </p>
          <div className="address">
            <p>
              <span>Address:</span> {user.location.street}, {user.location.city}
              ,{user.location.state}, {user.location.country}
            </p>
          </div>
        </div>
        <i
          className="ri-arrow-go-back-line"
          onClick={() => {
            history.push("/users");
          }}
        ></i>
      </div>
    </div>
  );
};

export default ShowUser;
