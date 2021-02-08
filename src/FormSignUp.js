const FormSignUp = () => {
  return (
    <div className="form-content-right">
      <form className="form">
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
          />
        </div>

        <div className="form-inputs">
          <label className="form-label" htmlFor="email">
            E-mail:
          </label>
          <input
            id="email"
            type="text"
            className="form-input"
            name="email"
            placeholder="Enter ur email"
          />
        </div>

        <div className="form-inputs">
          <label className="form-label" htmlFor="password">
            Password:
          </label>
          <input
            id="password"
            type="text"
            className="form-input"
            name="password"
            placeholder="Enter ur password"
          />
        </div>

        <div className="form-inputs">
          <label className="form-label" htmlFor="passowrd2">
            Confirm Password:
          </label>
          <input
            id="passowrd2"
            type="text"
            className="form-input"
            name="passowrd2"
            placeholder="Enter ur passowrd2"
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
