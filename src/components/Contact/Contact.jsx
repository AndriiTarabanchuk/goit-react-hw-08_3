import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdClose, MdEdit } from "react-icons/md";
import Button from "../Button/Button";
import { deleteContact } from "../../redux/contacts/operations";

function Contact({ contact }) {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <div className={css.wrapItem}>
      <div className={css.box}>
        <div className={css.item}>
          <FaUser className={css.person} />
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.item}>
          <FaPhoneAlt className={css.person} />
          <p className={css.text}>{number}</p>
        </div>
      </div>
      {/* <Button onClick={() => dispatch(deleteContact(contact.id))}>
        <p className={css.textBtn}>Delete</p>
      </Button> */}
      <div className={css.btnBox}>
        <Button>
          <MdEdit size={24} />
        </Button>
        <Button onClick={handleDelete}>
          <MdClose size={24} className={css.textBtn} />
        </Button>
      </div>
    </div>
  );
}

export default Contact;
