import { useSelector, useDispatch } from "react-redux";
import { selectStatusFilter } from "../../redux/tasks/selectors";
import { statusFilters } from "../../redux/tasks/constants";
import { setStatusFilter } from "../../redux/tasks/filterSlice";
import css from "./StatusFilter.module.css";
import Button from "../Button/Button";

const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
export default StatusFilter;
