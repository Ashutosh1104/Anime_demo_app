import React from "react";
import { v4 as uuidv4 } from "uuid";

const RecipeDetails = ({ anime }) => {
    return (
      <ul key={uuidv4()} className="ingredient-list">
        <li className="ingredient-text">{anime.rating}</li>
        <li className="ingredient-weight">episode - {anime.episode}</li>
      </ul>
    );
};

export default RecipeDetails;