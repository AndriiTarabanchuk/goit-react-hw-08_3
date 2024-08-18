import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { addTask } from "../../redux/tasks/operations";
import css from "./TaskForm.module.css";

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(event.target.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit" className={css.btnForm}>
        Add task
      </Button>
    </form>
  );
};
export default TaskForm;
