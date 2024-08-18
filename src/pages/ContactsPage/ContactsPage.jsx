import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import ContactSearch from "../../components/ContactSearch/ContactSearch";
import css from "./ContactsPage.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router";

const ContactsPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <>
        <h2 className={css.title}>Contacts page</h2>
        <ContactForm />
        <ContactSearch />
        <ContactList />
      </>
      {/* {isLoggedIn ? (
      ) : (
        <>
          <Navigate to="/" />
        </>
      )} */}
    </>
  );
};

export default ContactsPage;
