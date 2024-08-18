import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import ContactSearch from "../../components/ContactSearch/ContactSearch";
import css from "./ContactsPage.module.css";
import { selectToken } from "../../redux/auth/selectors";
import { Navigate } from "react-router";

const ContactsPage = () => {
  const token = useSelector(selectToken);
  return (
    <>
      {token ? (
        <>
          <ContactForm />
          <ContactSearch />
          <ContactList />
        </>
      ) : (
        <>
          <Navigate to="/" />
        </>
      )}
    </>
  );
};

export default ContactsPage;
