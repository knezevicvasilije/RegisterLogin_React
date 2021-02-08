import useForm from "./useForm";
import validate from "./validateInfo";

const FormSignUp = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className="form-inputs">
          <label className="form-label" htmlFor="username">
            Username:
          </label>
          <input
            id="username"
            type="text"
            className="form-input"
            name="username"
            placeholder="Enter ur username"
            value={values.username}
            onChange={handleChange}
          />
        </div>
        {errors.username && <p>{errors.username}</p>}
        <div className="form-inputs">
          <label className="form-label" htmlFor="email">
            E-mail:
          </label>
          <input
            id="email"
            type="email"
            className="form-input"
            name="email"
            placeholder="Enter ur email"
            value={values.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs">
          <label className="form-label" htmlFor="password">
            Password:
          </label>
          <input
            id="password"
            type="password"
            className="form-input"
            name="password"
            placeholder="Enter ur password"
            value={values.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs">
          <label className="form-label" htmlFor="passowrd2">
            Confirm Password:
          </label>
          <input
            id="password2"
            type="password"
            className="form-input"
            name="password2"
            placeholder="Enter ur password2"
            value={values.password2}
            onChange={handleChange}
          />
        </div>

        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Already have account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};
export default FormSignUp;
