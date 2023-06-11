import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function RickyDescription() {
  const [ricky, setRicky] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("id::", id);
  useEffect(() => {
    const fetchSingleRicky = async () => {
      let res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      let data = await res.json();
      console.log("data::", data);
      setRicky({ ...data });
    };
    fetchSingleRicky();
  }, [id]);
  const handleClick = () => {
    navigate("/projects/ricky");
  };
  return (
    <div className="sricky">
      <h4>{ricky?.name} </h4>
      <img alt="" src={ricky?.image} width={200} />
      <h3> {ricky?.status} </h3>
      <h3> {ricky?.species} </h3>
      <button onClick={handleClick}> GO_BACK </button>
    </div>
  );
}
