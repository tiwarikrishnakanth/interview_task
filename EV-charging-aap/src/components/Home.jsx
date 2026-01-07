import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const profile = JSON.parse(localStorage.getItem("profile"));

  return (
    <div className="container">
      <h2>Welcome {profile?.name}</h2>
      <p>Car Type: {profile?.car}</p>

      <div className="grid">
        <button onClick={() => navigate("/find-cpo")}>Find CPO</button>
        <button>My Sessions</button>
        <button>Payments</button>
        <button>Settings</button>
      </div>
    </div>
  );
}

export default Home;
