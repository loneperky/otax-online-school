import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, authUser }) {
  return authUser ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
