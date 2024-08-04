import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";
import { Field, Form, Formik } from "formik";

const SearchBar = ({ handleSearch }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (valeus, actions) => {
    if (!valeus.query) {
      toast("Please type any title of movie", {
        duration: 2000,
      });
      return;
    }
    handleSearch(valeus.query);
    actions.resetForm();
  };
  return (
    <div>
      <Toaster position="top-center" reverseOrder={true} />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            name="query"
            placeholder="Search movie..."
            type="search"
            autoComplete="off"
            className={s.input}
          />
          <button className={s.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
