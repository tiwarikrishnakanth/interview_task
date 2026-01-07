import chargePoints from "../data/chargePoints";

function FindCPO() {
  return (
    <div className="container">
      <h2>Nearby Charge Points</h2>
      {chargePoints.map((cp) => (
        <div key={cp.id} className="card">
          <h4>{cp.name}</h4>
          <p>{cp.location}</p>
        </div>
      ))}
    </div>
  );
}

export default FindCPO;
