import { useState } from "react";
import Kitchen from "./Kitchen";
import Menus from "./Menus";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = () => {
  const [info, setInfo] = useState([]);

  const handleCook = (recipe_id, recipe_name, preparing_time, calories) => {
    const newRecipe = {
      recipeId: recipe_id,
      recipeName: recipe_name,
      recipeTime: preparing_time,
      recipeCalorie: calories,
    };

    const doesExist = info.filter(
      (element) => element.recipeName === newRecipe.recipeName
    );

    if (doesExist.length == 0) setInfo([...info, newRecipe]);
    else toast("⛔ Already added!", { autoClose: 1000 });
  };

  return (
    <>
      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className="font-bold text-3xl">Our Recipes</h1>
        <p className="w-[850px] text-center">
          {" "}
          Discover a variety of delicious and healthy recipes that you can
          easily make at home. From vegan and vegetarian options to meat dishes
          and desserts, we have something for everyone. All of our recipes are
          carefully curated and tested to ensure that they are not only
          delicious but also nutritious. Start exploring now and find your new
          favorite recipe!
        </p>
      </div>
      <div className="flex">
        <div className="basis-3/5">
          <Menus handleCook={handleCook}></Menus>
        </div>
        <div className="basis-2/5">
          <Kitchen info={info} setInfo={setInfo}></Kitchen>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Recipes;
