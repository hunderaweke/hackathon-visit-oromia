import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import logo from "../../assets/logo.png";
import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router";
const schema = z
  .object({
    first_name: z
      .string({
        required_error: "Full Name is required",
      })
      .min(1, { message: "Name is required" }),
    email: z
      .string({ required_error: "Email is Required" })
      .email({ message: "Invalid email address" })
      .min(4, { message: "Must be at least 4 characters" }),
    password: z
      .string({ required_error: "Password Must be Filled" })
      .min(8, { message: "Password is at Least 8 charactera" }),
    conpassword: z
      .string({ required_error: "Password Must be Filled" })
      .min(8, { message: "Password is at Least 8 charactera" }),
  })
  .superRefine(({ conpassword, password }, ctx) => {
    if (conpassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords does not match",
      });
    }
  });

type FormData = z.infer<typeof schema>;
// const [validationResult,setValidationResult] = useState("");
// const Naviagate = useNavigate()
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log({
      first_name: data.first_name,
      email: data.email,
      password: data.password,
    });
    try {
      axios.post("http://192.168.137.1:5000/accounts/register/", {
        first_name: data.first_name,
        email: data.email,
        password: data.password,
      });
      // .then((res)=>{

      // })
    } catch (errorr) {
      console.error(errorr);
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center bg"
      style={{ minHeight: "100vh" }}
    >
      <form
        method="POST"
        className="card p-5 py-3 my-2"
        style={{
          width: "clamp(25rem, 25rem + 1vw ,30rem)",
          background: "#071C42",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" mt-3 mb-4 d-flex justify-content-center align-items-center">
          <img src={logo} alt="AfriHub" style={{ width: "3rem" }} />
          <span className="text-light mx-4 fs-3">Imaltuu</span>
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="first_name" className="form-label fs-6 text-light">
            Full Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="full-name"
            placeholder="Full Name"
            // required
            {...register("first_name")}
          />
          {/* {errors.email && <p className="text-danger"> {errors.email.required_error} </p>} */}
          {errors.first_name && (
            <p className="text-danger"> {errors.first_name.message} </p>
          )}
          <label htmlFor="email" className="form-label fs-6 text-light">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            // required
            {...register("email")}
          />
          {/* {errors.email && <p className="text-danger"> {errors.email.required_error} </p>} */}
          {errors.email && (
            <p className="text-danger"> {errors.email.message} </p>
          )}
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="password" className="form-label fs-6 text-light">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter Password"
            // required
            {...register("password")}
          />
          {errors.password && (
            <p className="text-danger"> {errors.password.message} </p>
          )}
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="password" className="form-label fs-6 text-light">
            Confirm Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="conpassword"
            placeholder="Confirm Password"
            // required field
            {...register("conpassword")}
          />
          {errors.conpassword && (
            <p className="text-danger"> {errors.conpassword.message} </p>
          )}
        </div>
        <div className="mt-3 mb-3 d-flex">
          <p className="text-light ">Already have account ? </p>
          <a href="/login" className="link-light mx-2">
            Login
          </a>
        </div>
        <button
          type="submit"
          className="btn w-100 border-primary rounded-5 text-light mt-3"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
