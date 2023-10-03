import { useEffect, useState } from "react";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [brewed, setBrewed] = useState("");
  const [tips, setTips] = useState("");
  const [attenuation, setAttenuation] = useState(0);
  const [by, setBy] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newData = {
      name,
      tagline,
      description,
      brewed,
      tips,
      attenuation,
      by,
    };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/beers/new`,
        {
          method: "POST",
          body: JSON.stringify(newData),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        const newBeer = await response.json();
        console.log(newBeer);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="description"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Tagline:
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={(event) => setTagline(event.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      First Brewed:
      <input
        type="text"
        name="first_brewed"
        value={brewed}
        onChange={(event) => setBrewed(event.target.value)}
      />
      <label>
        Brewer's Tips:
        <input
          type="text"
          name="brewers_tips"
          value={tips}
          onChange={(event) => setTips(event.target.value)}
        />
      </label>
      <label>
        Attenuation Level:
        <input
          type="number"
          name="attenuation_level"
          value={attenuation}
          onChange={(event) => setAttenuation(event.target.value)}
        />
      </label>
      <label>
        Contributed By:
        <input
          type="text"
          name="contributed_by"
          value={by}
          onChange={(event) => setBy(event.target.value)}
        />
      </label>
      <button type="submit">Add Beer</button>
    </form>
  );
}

export default AddBeerPage;
