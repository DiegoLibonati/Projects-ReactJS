import React from "react";
import { CardTour } from "./CardTour";
import { useFetchTour } from "../hooks/useFetchTour";

export const Main = () => {
  const { information, setInformation, loading } = useFetchTour();

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
          {loading ? (
            <div className="spinner"></div>
          ) : (
            information.map((tour) => (
              <CardTour
                key={tour.id}
                {...tour}
                information={information}
                setInformation={setInformation}
                loading={loading}
              ></CardTour>
            ))
          )}
        </section>
      </main>
    </>
  );
};
