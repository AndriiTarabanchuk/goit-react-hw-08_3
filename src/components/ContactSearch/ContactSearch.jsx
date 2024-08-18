import css from "./ContactSearch.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/contacts/selectors.js";
import { changeFilter } from "../../redux/filter/slice.js";

const ContactSearch = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.wrapSearch}>
      <label className={css.label}>
        <h3>Find by name and number</h3>
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Search..."
          value={filter}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default ContactSearch;
