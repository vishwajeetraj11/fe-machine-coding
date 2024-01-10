import { useEffect, useState } from "react";
import "./typeahead.css";

const suggestionsData = [
  "The Godfather",
  "The Shawshank Redemption",
  "Schindler's List",
  "The Dark Knight",
  "Forrest Gump",
  "Pulp Fiction",
  "Inception",
  "Fight Club",
  "The Matrix",
  "Goodfellas",
  "The Silence of the Lambs",
  "Jurassic Park",
  "Titanic",
  "Saving Private Ryan",
  "The Green Mile",
  "Gladiator",
  "The Lion King",
  "Braveheart",
  "Toy Story",
  "The Sixth Sense",
  "Avatar",
  "The Avengers",
  "The Lord of the Rings: The Fellowship of the Ring",
  "The Lord of the Rings: The Two Towers",
  "The Lord of the Rings: The Return of the King",
  "Harry Potter and the Sorcerer's Stone",
  "The Empire Strikes Back",
  "Back to the Future",
  "Raiders of the Lost Ark",
  "Terminator 2: Judgment Day",
  "The Prestige",
  "The Departed",
  "Whiplash",
  "Mad Max: Fury Road",
  "La La Land",
  "Black Panther",
  "Joker",
  "1917",
  "Parasite",
  "Interstellar",
  "The Social Network",
  "Up",
  "Wall-E",
  "The Grand Budapest Hotel",
  "Django Unchained",
  "The Big Lebowski",
  "No Country for Old Men",
  "The Curious Case of Benjamin Button",
  "The Incredibles",
  "Eternal Sunshine of the Spotless Mind",
];

const Typeahead = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const fetchSuggestion = () => {
    setSuggestions(
      suggestionsData.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(query.toLowerCase()) !== -1
      )
    );
  };

  useEffect(() => {
    const handler = setTimeout(fetchSuggestion, 2000);
    return () => clearTimeout(handler);
  }, [query]);

  return (
    <div
      className=""
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <input
        className="typeahead-input"
        value={query}
        onChange={(e) => {
          const value = e.target.value;
          setQuery(value);
        }}
      />
      <div>
        {suggestions.map((suggestion) => (
          <div key={suggestion}>{suggestion}</div>
        ))}
      </div>
    </div>
  );
};

export default Typeahead;
