import { Link } from "react-router-dom"

export default function Login () {
  return (
    <div className="container p-2 md:m-6 md:p-6">
      <div className="flex justify-between my-6 items-center">
        <Link to={'/'} className="text-6xl py-2 md:py font-bold text-left text-gray-50">
          Digital Sage
        </Link>
        <Link to={'/signup'} className="text-white text-3xl">Signup</Link>
      </div>
      <div className="md:flex justify-center w-full px-2 my-24">
        <form className="shadow-xl rounded-md text-gray-50 bg-gray-700 md:p-6 lg:w-2/3">
          <h1 className="text-2xl font-bold m-4 hidden md:block">Login to your account.</h1>

          <div className="my-2 p-2 flex flex-col">
            <label className="my-2 font-bold">
              <span className="text-2xl">Email</span>
              <i className="inline-block ml-4 text-xs fas fa-envelope"></i>
            </label>
            <input type="text" className="p-2 text-2xl bg-gray-900 rounded-md outline-none border-none" />
          </div>
          <div className="my-2 p-2 flex flex-col">
            <label className="my-2 font-bold">
              <span className="text-2xl">Password</span>
              <i className="inline-block ml-4 text-xs fas fa-key"></i>
            </label>
            <input type="password" className="p-2 bg-gray-900 rounded-md outline-none border-none" />
          </div>
          <div className="my-2 p-2 flex flex-col justify-center items-center">
            <button className="w-3/4 my-2 py-2 text-2xl rounded px-16 text-center shadow-lg bg-gray-200 text-gray-900 font-bold capitalize hover:bg-gray-600 hover:text-gray-200 transition"
            >
              login
            </button>
          </div>
        </form>
      </div>
      <p className="text-center text-2xl text-gray-50">
        Digital Sage Copyright 2020 &copy;
      </p>
    </div>
  )
}