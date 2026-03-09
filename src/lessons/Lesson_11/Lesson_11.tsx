import { useState } from "react";
import axios from "axios";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

function Lesson_11() {
  const [country, setCountry] = useState<string>("");
  const [universities, setUniversities] = useState<any[]>([]);
  const [error, setError] = useState<string>("");

  const getUniversities = async () => {
    try {
      setError("");
      setUniversities([]);

      const response = await axios.get(
        `http://universities.hipolabs.com/search?country=${country}`
      );

      const data = response.data.slice(0, 15);

      if (data.length === 0) {
        setUniversities([]);
      } else {
        setUniversities(data);
      }
    } catch (err) {
      setError("Some Network Error");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Universities Search</h2>

      <Input
        id="country"
        name="country"
        label="Country"
        placeholder="Enter Country for searching universities"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />

      <Button name="Get Universities" onClick={getUniversities} />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!error && universities.length === 0 && (
        <p>No Universities by your request</p>
      )}

      <div style={{ marginTop: "20px" }}>
        {universities.map((uni, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>{uni.name}</h3>
            <p>{uni.country}</p>
            <a href={uni.web_pages[0]} target="_blank">
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lesson_11;