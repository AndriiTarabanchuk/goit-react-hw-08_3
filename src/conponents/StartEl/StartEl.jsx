import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCount } from "../../redux/start/selectors";
import { increment } from "../../redux/start/slice";

const StartEl = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <div>
      <h1>Vite + React + Redux</h1>
      <button onClick={() => dispatch(increment())}>count is {count}</button>
      <p>Click on the Vite and React logos to learn more</p>
    </div>
  );
};

export default StartEl;
