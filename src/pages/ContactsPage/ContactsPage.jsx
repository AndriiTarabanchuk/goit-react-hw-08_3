import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import ContactSearch from "../../components/ContactSearch/ContactSearch";
import css from "./ContactsPage.module.css";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { Navigate } from "react-router";

const ContactsPage = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  return (
    <>
      {isRefreshing ? (
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
