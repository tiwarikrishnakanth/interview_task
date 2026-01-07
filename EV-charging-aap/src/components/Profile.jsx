import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [name, setName] = useState("");
  const [car, setCar] = useState("");
  const navigate = useNavigate();

  const saveProfile = () => {
    if (!name || !car) return alert("Fill all fields");

    const profile = { name, car };
    localStorage.setItem("profile", JSON.stringify(profile));
    navigate("/home");
  };

  return (
    <div className="container">
      <h2>Profile Setup</h2>

      <input
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select onChange={(e) => setCar(e.target.value)}>
        <option value="">Select Car</option>
        <option>Tata</option>
        <option>MG</option>
        <option>Citron</option>
        <option>Mahindra</option>
        <option>Maruti Suzuki</option>
      </select>

      <button onClick={saveProfile}>Save</button>
    </div>
  );
}

export default Profile;
