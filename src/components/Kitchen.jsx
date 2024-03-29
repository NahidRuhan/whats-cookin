import { useState } from "react";

const Kitchen = ({ info, setInfo }) => {
  const [cookin, setCookin] = useState([]);
  const [time, setTime] = useState(0);
  const [calories, setCalories] = useState(0);
  const handlePreparing = (id,t,c) => {
    const onCook = info.filter((element) => {
        setTime(time+t);
        setCalories(calories+c);
        return element.recipeId === id
    });
    setCookin([...cookin, onCook]);
    const newInfo = info.filter((element) => element.recipeId != id);
    setInfo(newInfo);
  };
  return (
    <div className="sticky top-5 border p-5">
      <div className="flex flex-col justify-center">
        <h1 className="text-center py-5 border-b-2 text-xl font-bold">
          Want to cook: 0{info.length}
        </h1>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead className="text-base">
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calorie</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {info.map((info, idx) => (
                  <tr key={info.recipeId}>
                    <th>{idx + 1}</th>
                    <td>{info.recipeName}</td>
                    <td>{info.recipeTime} min</td>
                    <td>{info.recipeCalorie} kj</td>
                    <td>
                      <button
                        onClick={() => handlePreparing(info.recipeId,info.recipeTime,info.recipeCalorie)}
                        className="btn bg-[#0BE58A] rounded-full border-none outline-none w-[80px] text-white"
                      >
                        Preparing
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <h1 className="text-center py-5 border-b-2 text-xl font-bold">
          Currently Cooking: 0{cookin.length}
        </h1>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead className="text-base">
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calorie</th>
                </tr>
              </thead>
              <tbody>
                {cookin.map((cookin2, idx) =>
                  cookin2.map((info) => (
                    <tr key={info.recipeId}>
                      <th>{idx + 1}</th>
                      <td>{info.recipeName}</td>
                      <td>{info.recipeTime} min</td>
                      <td>{info.recipeCalorie} kj</td>
                    </tr>
                  ))
                )}
                {cookin.length? (<tr className="font-bold">
                      <th></th>
                      <td></td>
                      <td>Total time = {time} min</td>
                      <td>Total calories = {calories} kj</td>
                    </tr>):(<></>)}
                      
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
