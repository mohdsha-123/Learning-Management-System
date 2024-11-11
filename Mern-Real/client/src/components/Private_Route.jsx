import { useSelector } from "react-redux";
import { Outlet , Navigate  } from "react-router-dom";

export default function Private_Route() {
    const {currentUser} = useSelector((state) => state.user)
  return currentUser ? <Outlet /> : <h1> Sign in to view this page</h1>
}
