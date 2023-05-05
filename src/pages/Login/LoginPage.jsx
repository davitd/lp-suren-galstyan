import Header from '../../components/Header/Header';

import Login from "../../containers/Login";
import './LoginPage.css';

export default function LoginPage() {
  return (
    <div className="login-page">
      <Header />
      <Login />
    </div>
  );
}
