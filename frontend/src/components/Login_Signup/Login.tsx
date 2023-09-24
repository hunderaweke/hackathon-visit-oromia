import { FieldValues, useForm } from 'react-hook-form'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import logo from '../../assets/logo.png'

const schema = z.object({
  email: z.string({ required_error: "Email is Required"})
          .email({ message: "Invalid email address"  })
          .min(4, { message: "Must be at least 4 characters" }),
  password: z.string({ required_error: "Password Must be Filled" })
  .min(8, {message: "Password is at Least 8 charactera"})
})

type FormData = z.infer<typeof schema>;

const Login = () => {

  const { 
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) =>{
    console.log(data)
  }

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center bg"
      style={{height: "100vh"}}
    >
      <form
        method="POST"
        className="card p-5"
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
          <label htmlFor="email" className="form-label fs-6 text-light">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            // required
            {...register('email')}
          />
          {/* {errors.email && <p className="text-danger"> {errors.email.required_error} </p>} */}
          {errors.email && <p className="text-danger"> {errors.email.message} </p>}
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
          {errors.password && <p className="text-danger"> {errors.password.message} </p>}
        </div>
        <div className="mt-3 mb-3 d-flex">
          <p className="text-light ">Do not have account ? </p>
          <a href="/signup" className="link-light mx-2">
            Signup
          </a>
        </div>
        <button
        type='submit'
          className="btn w-100 border-primary rounded-5 text-light mt-3"
        >
            Login
        </button>
      </form>
    </div>
  )
}

export default Login