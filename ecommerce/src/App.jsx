import React, { useState } from "react";
import Navigation from "./components/Navigation/Nav";
import Products from "./components/Products/Products";
import Recommended from "./components/Recommended/Recommended";
import SideBar from "./components/Sidebar/SideBar";

//Database
import products from "./db/data";
import Card from "./components/Card";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //input filter
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1,
  );

  //Radio Filter -----
  const handleChange = (e) => {
    console.log(e);

    setSelectedCategory(e.target.value);
  };

  //-------Buttons Filter -----
  const handleClick = (e) => setSelectedCategory(e.target.value);

  function filteredData(products, selected, query) {
    let filteredProducts = products;
    //FIltered Input Items//
    if (query) {
      filteredProducts = filteredItems;
    }

    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, price, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected,
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      ),
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <SideBar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
};

export default App;
