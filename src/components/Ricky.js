import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Ricky() {
  const [ricky, setRicky] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      console.log("res::", res.data.results);
      setRicky([...res.data.results]);
    });
  }, []);
  return (
    <div>
      <div className="ricky-container">
        {ricky.map((r, i) => {
          return (
            <div key={i} className="ricky">
              <Link to={`/projects/ricky/${r.id}`}>
                <img alt="" src={r.image} width={150} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
