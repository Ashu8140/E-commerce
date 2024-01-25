import { withFormik } from "formik";
import React from "react";
import * as Yup from 'yup';
import Input from "./Input";

function callLoginApi(values) {
}
const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  Password: Yup.string().min(6).max(12).required(),
});
const initialValues = {
  email: "",
  Password: "",
};
export function Login({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) {
  return (

    <div className="flex items-center justify-center w-full h-screen bg-gray-100 ">
      <form
        onSubmit={handleSubmit} className="flex flex-col p-5 bg-white shadow-md w-96 h-96 rounded-r-md"
      >
        <div className="flex justify-center">
          <img className="w-40 h-40 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXzlB2tRWH7mFyGeX9c2mbeyPbZLaWfTyZqg&usqp=CAU" />
        </div>
        <h1 className="self-center mb-6 text-2xl font-bold ">Login Page</h1>
        <Input
          lable="Email-address"
          values={values.email}
          errors={errors.email}
          touched={touched.email}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Email-addrdess"
          name="email"
          id="email-address"
          type="email"
          autoComplete="email"
          placeholder="Email Address"
          required
          className="rounded-t-none"
        />
        <Input
          values={values.Password}
          errors={errors.Password}
          touched={touched.Password}
          onChange={handleChange}
          onBlur={handleBlur}
          label="password"
          name="password"
          id="xyz"
          type="password"
          autoComplete="current-passward"
          placeholder="passward"
          required
          className="rounded-t-none"
        />

        <button type="submit" className="self-end px-2 mt-3 bg-indigo-600 border-2 border-black " >Login</button>
      </form>
    </div>
  );
}
const myHOC = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: callLoginApi,
});
const EasyLogin = myHOC(Login);

export default EasyLogin;
