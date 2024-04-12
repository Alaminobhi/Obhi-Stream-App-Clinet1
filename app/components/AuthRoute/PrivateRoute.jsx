/* eslint-disable no-unused-vars */
import {redirect} from "react-router-dom";

const PrivateRoute = ({children}) => {
  const user = JSON.parse(localStorage.getItem('userId'));
console.log(user);
    if (!user) {
        return redirect("/login");
      }
      return children;
};

export default PrivateRoute;