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
      <div className="lg:grid text-white block lg:grid-cols-2 gap-1 mb-8 lg:ml-8 px-2 lg:px-8 lg:w-4/5 bg-gray-900 py-4 rounded-lg shadow-lg">
      <div className="grid lg:col-span-2 my-4">
        <h1 className="text-2xl font-bold capitalize">Login to your account <i className="ml-4 fas fa-user"></i></h1>
      </div>
      <div className="my-2 flex flex-col">
        <label>Email <i className="fas fa-envelope text-xs"></i></label>
        <input type="text" className="rounded-lg p-2 bg-gray-700 border-0 shadow-inner focus: outline-none focus:border-0" />
      </div>
      <div className="my-2 flex flex-col mt-2">
        <label>Password <i className="fas fa-key text-xs"></i></label>
        <input type="password" className="rounded-lg p-2 bg-gray-700 border-0 shadow-inner focus: outline-none focus:border-0" />
      </div>
      <div className="grid col-span-2 mt-6 justify-end">
       <button 
       className="px-8 py-2 bg-gray-800 shadow-lg rounded-md text-white text-center font-bold
       hover:bg-gray-600 transition focus:scale-105"
       >
        Submit
       </button>
      </div>
    </div>
      <p className="text-center text-2xl text-gray-50">
        Digital Sage Copyright 2020 &copy;
      </p>
    </div>
  )
}