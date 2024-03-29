/* eslint-disable no-unused-vars */
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const Menu = ({menu,handleCook}) => {
    const {recipe_id,recipe_name,short_description,ingredients,preparing_time,calories,recipe_image} = menu;
    return (
        <div>
            <div className="card w-80 lg:w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={recipe_image} alt={recipe_name} className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <p className="pb-5 border-b-2">{short_description}</p>
    <p className="text-justify">Ingredients: {ingredients.length}</p>
    <ul className="list-disc pb-5 border-b-2 text-sm">
        {
            ingredients.map((ing,ind)=><li className="ml-7 text-slate-500" key={ind}>{ing}</li>)
        }
    </ul>
    <div className="flex gap-5 pb-5">
        <p className="flex items-center gap-3"><span><CiClock2 /></span>{preparing_time} minutes</p>
        <p className="flex items-center gap-3"><span><AiOutlineFire /></span>{calories} calories</p>

    </div>
    <div><button onClick={()=>handleCook(recipe_id,recipe_name,preparing_time,calories)} className="btn bg-[#0BE58A] rounded-full border-none outline-none w-[170px] text-white">Want to cook</button></div>
    
  </div>
</div>
        </div>
    );
};

export default Menu;