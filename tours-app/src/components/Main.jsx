import React from "react";
import { CardTour } from "./CardTour";
import { useFetchTour } from "../hooks/useFetchTour";

export const Main = () => {
  const { information, setInformation } = useFetchTour();

  return (
    <>
      <main>
        <section className="title_container">
          <article className="title_container_article">
            <h1>Our Tours</h1>
            <div></div>
          </article>
        </section>

        <section className="cards_container">
          {information.map((tour) => (
            <CardTour
              key={tour.id}
              {...tour}
              information={information}
              setInformation={setInformation}
            ></CardTour>
          ))}
        </section>
      </main>
    </>
  );
};
