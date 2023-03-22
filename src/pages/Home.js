import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";

const styles = {
  container: {
    height: 677,
    width: `calc(100vw + 32px)`,
    backgroundImage: `url(${"https://marvel-assets.s3.amazonaws.com/marvel-img.jpg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    margin: -32,
    padding: 60,
  },
};

const HomePage = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) navigate("/login");
  }, [user, loading, navigate]);

  return (
    <>
      <Link to={"/marvel/characters/list"}>
        <div style={styles.container}></div>
      </Link>
    </>
  );
};

export default HomePage;
