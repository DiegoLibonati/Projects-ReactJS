import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error.css";

export const Error = () => {
  return (
    <main className="main_container">
      <section className="error_container">
        <h1>Page not found</h1>
        <Link to="/">Go Home</Link>
        <img
          src="https://images.squarespace-cdn.com/content/v1/5cc0568c93a632690941e6aa/1559238179719-6DM64NLN6W8T6JPLYVP8/tenor.gif?format=300w"
          alt="sad person gif"
        ></img>
      </section>
    </main>
  );
};
