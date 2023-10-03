import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  const fetchBeers = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/beers`);

      if (response.ok) {
        const allBeers = await response.json();

        setBeers(allBeers);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchBeers();
  }, []);

  useEffect(() => {
    console.log(beers);
  }, [beers]);

  return (
    <>
      {beers.map((beer) => (
        <Link to={`/beers/${beer._id}`} key={beer._id}>
          <img src={beer.image_url} style={{ height: "180px" }} />
          <h1>{beer.name}</h1>
          <h3>{beer.tagline}</h3>
          <h5>Created by: {beer.contributed_by}</h5>
        </Link>
      ))}
    </>
  );
}

export default AllBeersPage;
