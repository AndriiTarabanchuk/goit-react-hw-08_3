import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import ContactSearch from "../../components/ContactSearch/ContactSearch";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  return (
    <>
      <ContactForm />
      <ContactSearch />
      <ContactList />
    </>
  );
};

export default ContactsPage;
