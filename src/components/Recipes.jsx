import { useState } from "react";
import Kitchen from "./Kitchen";
import Menus from "./Menus";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = () => {

    const [info,setInfo] = useState([]);
  
    const handleCook = (recipe_id,recipe_name, preparing_time, calories) => {
        const newRecipe = {
          recipeId: recipe_id,
          recipeName: recipe_name,
          recipeTime: preparing_time,
          recipeCalorie: calories
        };

        const doesExist= info.filter(element => element.recipeName===newRecipe.recipeName)
      
        if(doesExist.length==0) setInfo([...info, newRecipe]);
        else toast("⛔ Already added!", { autoClose: 1000 });
    }

    return (
        <>
        <div className="flex flex-col gap-5 items-center justify-center">
            <h1 className="font-bold text-3xl">Our Recipes</h1>
            <p className="w-[850px] text-center">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            
            
        </div>
        <div className="flex">
                <div className="basis-3/5"><Menus handleCook={handleCook}></Menus></div>
                <div className="basis-2/5"><Kitchen info={info} setInfo={setInfo}></Kitchen></div>
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default Recipes;