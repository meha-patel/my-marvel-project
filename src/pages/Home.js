import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/marvel/characters/list");
  }

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to{" "}
        <Link to="/marvel/characters/list">the list of marvel characters</Link>.
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
};

export default HomePage;
