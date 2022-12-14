import useCounter from "../hooks/useCounter";

const initialValue = 1;

const Counter = () => {
  const { count, increment, decrement, setCount } = useCounter(1);

  const handleChange = ({ target: { value } }) => {
    if(value < initialValue ) {
        setCount(initialValue)
    }
  };

  const isDisabled = count <= initialValue;
  return (
    <div>
      <Button onClick={increment}>+</Button>
      <input onChange={handleChange} value={count}></input>
      <Button onClick={decrement} disabled={isDisabled}>
        -
      </Button>
    </div>
  );
};

export default Counter;