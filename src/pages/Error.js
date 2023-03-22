import { Link } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <p>
          Error: You need to login first for accessing marvels list and it's
          informations.
        </p>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </main>
    </>
  );
}

export default ErrorPage;
