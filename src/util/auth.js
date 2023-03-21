import { auth } from "../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { redirect } from "react-router-dom";
import { useEffect } from "react";

export const CheckAuthLoader = () => {
  const [user] = useAuthState(auth);

  useEffect(() => {
    console.log("user:", user);
    if (!user) {
      return redirect("/login");
    }
    return null;
  }, [user]);
};

