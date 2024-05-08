import React from 'react'
import Form from "./form.js";
import { Title } from "./title.js";
import { Theme } from "./theme.js";

const movies = [
  {
    name: "Revengers",
    maxTickets: 12,
  },
  {
    name: "SpuderMoon",
    maxTickets: 10,
  },
  {
    name: "BaturuMan",
    maxTickets: 8,
  },
  {
    name: "JourneyRabbit",
    maxTickets: 2,
  },
  {
    name: "BluePenter",
    maxTickets: 3,
  },
  {
    name: "RiverGensMidGame",
    maxTickets: 5,
  },
];

export default function App() {
  const [theme, setTheme] = React.useState('revengers')
  
  return (
    <Theme theme={theme}>
      <Title>Peliculas</Title>
      {movies.map((movie) => (
        <Form 
          movie={movie}
          updateTheme={() => setTheme(movie.name)}
        />
      ))}
    </Theme>
  );
}
