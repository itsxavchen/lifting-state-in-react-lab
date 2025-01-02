const IngredientList = (props) => {
  return (
    <>
      <h2>Available Ingredients</h2>
      <ul>
        {props.availableIngredients.map((availableIngredient, index) => (
          <li key={index} style={{ backgroundColor: availableIngredient.color }}>
            {availableIngredient.name}
            <div>
              <button onClick={() => props.addToBurger(availableIngredient)}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IngredientList;
