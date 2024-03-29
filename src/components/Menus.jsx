import { useEffect } from "react";
import { useState } from "react";
import Menu from "./Menu";

const Menus = ({handleCook}) => {
    const [menus, setMenus] = useState([]);
    useEffect(()=>{
        fetch('recipe.json')
        .then(res=>res.json())
        .then(data=>setMenus(data))
    },[])
    return (
        <div className="grid grid-cols-2 gap-5">
            {

                menus.map((menu)=><Menu key={menu.recipe_id} menu={menu} handleCook={handleCook}></Menu>)

            }
        </div>
    );
};

export default Menus;