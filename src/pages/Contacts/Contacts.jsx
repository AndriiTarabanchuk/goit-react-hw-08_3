import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./Contacts.module.css";
import React, { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectUser } from "../../redux/auth/selectors";

const Contacts = () => {
  const dispatch = useDispatch();
  const listData = useSelector(selectUser);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default Contacts;
