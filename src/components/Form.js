import React, { useState } from "react";
const nameRegex = /^[a-zA-Z0-9 ]+$/;
const phoneRegex = /^[0-9]/;

const Form = ({ setUsername }) => {
  const [value, setValues] = useState({
    name: "",
    email: "",
    gender: "Male",
    phNum: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      value.name == "" ||
      value.email == "" ||
      value.phNum == 0 ||
      value.password == ""
    ) {
      setError("Error Message: All fields are mandatory");
    } else if (!nameRegex.test(value.name)) {
      setError("Error Message: Name is not alphanumeric");
    } else if (!value.email.includes("@")) {
      setError("Error Message:Email must contain @");
    } else if (
      !(
        value.gender == "Male" ||
        value.gender == "Female" ||
        value.gender == "Others"
      )
    ) {
      setError("Error Message: Please identify as male, female or others");
    } else if (!phoneRegex.test(value.phNum)) {
      setError("Error Message: Phone Number must contain only numbers");
    } else if (value.password.length < 6) {
      setError("Error Message: Password must contain atleast 6 letters");
    } else {
      setError("");
      let arr = value.email.split("@");
      setUsername(arr[0]);
    }
  };
  return (
    <div className="Form" onSubmit={handleSubmit}>
      <form>
        <input
          data-testid="name"
          type="text"
          placeholder="Name"
          value={value.name}
          onChange={(e) => setValues({ ...value, name: e.target.value })}
        />
        <input
          data-testid="email"
          type="text"
          placeholder="E-mail"
          value={value.email}
          onChange={(e) => setValues({ ...value, email: e.target.value })}
        />
        <select
          data-testid="gender"
          defaultValue={"Male"}
          onChange={(e) => setValues({ ...value, gender: e.target.value })}
        >
          <option value={"Male"}>Male</option>
          <option value={"Female"}>Female</option>
          <option value={"Others"}>Others</option>
        </select>
        <input
          data-testid="phoneNumber"
          type="text"
          placeholder="Phone Number"
          value={value.phNum}
          onChange={(e) => setValues({ ...value, phNum: e.target.value })}
        />
        <input
          data-testid="password"
          type="password"
          placeholder="Password"
          value={value.password}
          onChange={(e) => setValues({ ...value, password: e.target.value })}
        />
        <button type="submit" data-testid="submit">
          Submit
        </button>
      </form>
      <p className="errorMsg">{error}</p>
    </div>
  );
};

export default Form;
