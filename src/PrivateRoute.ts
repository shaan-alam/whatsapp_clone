import { Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, user, ...rest }) {
  return user !== null ? (
    <Component {...rest} />
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
}
