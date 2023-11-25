import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./DetailPage.css";

const DetailPage = () => {
  const [menu, setMenu] = useState({});
  const { userId } = useParams();
  const userIdNumber = parseInt(userId);

  const getMenu = (userId) => {
    axios
      .get(`https://api.mudoapi.tech/menu/${userId}`)
      .then((res) => {
        setMenu(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenu(userId);
  }, [userId]);

  
  const userIDs = [1, 2, 3, 4, 5]; 

  
  const currentIndex = userIDs.indexOf(userIdNumber);

  
  const prevUserId = currentIndex > 0 ? userIDs[currentIndex - 1] : null;
  const nextUserId = currentIndex < userIDs.length - 1 ? userIDs[currentIndex + 1] : null;

  return (
    <div className="detail-container">
      <div className="detail-card">
        <h1>{menu?.name}</h1>
        <p>{menu?.description}</p>
        <img src={menu?.imageUrl} alt={menu?.name} />
        <p>{menu?.type}</p>
        <p>{menu?.price}$</p>
      </div>

      <div className="pagination-container">
        {prevUserId !== null && (
          <Link to={`/detail/${prevUserId}`} className="pagination-button">
            &lt; Previous
          </Link>
        )}

        {userIDs.map((id) => (
          <Link key={id} to={`/detail/${id}`} className="pagination-button">
            {id}
          </Link>
        ))}

        {nextUserId !== null && (
          <Link to={`/detail/${nextUserId}`} className="pagination-button">
            Next &gt;
          </Link>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
