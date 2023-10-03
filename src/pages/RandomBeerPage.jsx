import { useState, useEffect } from "react";
function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState();

  const fetchRandomBeer = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/beers/random`
      );

      if (response.ok) {
        const theRandomBeer = await response.json();

        setRandomBeer(theRandomBeer);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchRandomBeer();
  }, []);
  useEffect(() => {
    console.log(randomBeer);
  }, [randomBeer]);

  return randomBeer ? (
    <div key={randomBeer._id}>
      <img src={randomBeer.image_url} style={{ height: "180px" }} />
      <h1>{randomBeer.name}</h1>
      <h3>{randomBeer.tagline}</h3>
      <h5>Created by: {randomBeer.contributed_by}</h5>
      <p>First brewed: {randomBeer.first_brewed}</p>
      <p>Attenuation level: {randomBeer.attenuation_level}</p>
      <p>{randomBeer.description}</p>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default RandomBeersPage;
