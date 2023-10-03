import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const { beerId } = useParams();

  const [beer, setBeer] = useState();

  const fetchBeer = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/beers/${beerId}`
      );

      if (response.ok) {
        const theBeer = await response.json();

        setBeer(theBeer);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchBeer();
  }, []);
  useEffect(() => {
    console.log(beer);
  }, [beer]);

  return beer ? (
    <div key={beer._id}>
      <img src={beer.image_url} style={{ height: "180px" }} />
      <h1>{beer.name}</h1>
      <h3>{beer.tagline}</h3>
      <h5>Created by: {beer.contributed_by}</h5>
      <p>First brewed: {beer.first_brewed}</p>
      <p>Attenuation level: {beer.attenuation_level}</p>
      <p>{beer.description}</p>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default BeerDetailsPage;
