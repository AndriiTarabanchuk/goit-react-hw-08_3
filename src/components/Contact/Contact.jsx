import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import Button from "../Button/Button";
import { deleteContact } from "../../redux/contacts/contactsOps";

function Contact({ contact }) {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

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
      <Button onClick={() => dispatch(deleteContact(contact.id))}>
        <p className={css.textBtn}>Delete</p>
      </Button>
    </div>
  );
}

export default Contact;
