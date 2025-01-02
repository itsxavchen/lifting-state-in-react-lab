// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
  return (
    <>
      <h2>Available Ingredients</h2>
      <ul>
        {props.stack.map((ingredient, index) => (
          <li key={index} style={{backgroundColor: ingredient.color}}>
             {ingredient.name}
             <button onClick={() => props.removeFromBurger(index)}>X</button>
          </li>
        ))}
      </ul>
    </>
  )
};

export default BurgerStack;
