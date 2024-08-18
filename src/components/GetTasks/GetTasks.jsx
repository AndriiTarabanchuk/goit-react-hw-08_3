import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../redux/tasks/operations";
import { getTasks } from "../../redux/tasks/selectors";
import css from "./GetTasks.module.css";
import { Task } from "../Task/Task";

const GetTasks = () => {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(getTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <h2>List items</h2>
      {error && <p>{error}</p>}
      {/* <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p> */}
      <ul className={css.list}>
        {items?.length > 0 &&
          items.map((item) => {
            return (
              <li className={css.element} key={item.id}>
                <Task task={item} />
              </li>
            );
          })}
      </ul>
      {isLoading && <p>Loading tasks...</p>}
    </div>
  );
};

export default GetTasks;
