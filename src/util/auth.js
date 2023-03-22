import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { redirect } from "react-router-dom";
import { auth } from "../Firebase";

export const CheckAuthLoader = () => {
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      return redirect("/login");
    }
    return null;
  }, [user]);
};
