import React from "react";
import { useGlobalContext } from "../helpers/context";
import { useFetch } from "../hooks/useFetch";
import "../styles/Search.css";
import "../styles/CocktailList.css";
import { CocktailItem } from "../components/CocktailItem";
import { Loading } from "../components/Loading";

export const Home = () => {
  const { inputSearch, setInputSearch } = useGlobalContext();

  const { loading, items } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputSearch}`
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <main className="main_container">
        <section className="search_container">
          <form
            className="search_container_form"
            onSubmit={(e) => handleSubmit(e)}
          >
            <label>Search your favorite cocktail: </label>
            <input
              type="text"
              placeholder="Cocktail name"
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
            ></input>
          </form>
        </section>

        {loading ? (
          <Loading></Loading>
        ) : (
          <section className="cocktail_list">
            {items.map((item) => {
              return <CocktailItem key={item.id} {...item}></CocktailItem>;
            })}
          </section>
        )}
      </main>
    </>
  );
};
