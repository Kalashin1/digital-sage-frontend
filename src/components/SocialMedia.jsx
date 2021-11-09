export default function SocialMediaInfoCard() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:ml-8 px-2 lg:px-8 lg:w-4/5 bg-gray-900 py-4 rounded-lg shadow-lg">
      <div className="grid col-span-2 my-4">
        <h1 className="text-2xl font-bold capitalize">Social media info <i className="ml-4 fab fa-reddit"></i></h1>
      </div>
      <div className="flex flex-col lg:mr-4">
        <label>Twitter  <i className="fab fa-twitter text-xs"></i></label>
        <input type="text" className="rounded-lg p-2 bg-gray-700 border-0 shadow-inner focus: outline-none focus:border-0" />
      </div>
      <div className="flex flex-col mt-2 lg:mt-0">
        <label>Facebook <i className="fab fa-facebook text-xs"></i></label>
        <input type="text" className="rounded-lg p-2 bg-gray-700 border-0 shadow-inner focus: outline-none focus:border-0" />
      </div>
      <div className="flex flex-col lg:mr-4 mt-2">
        <label>Instagram <i className="fab fa-instagram text-xs"></i></label>
        <input type="text" className="rounded-lg p-2 bg-gray-700 border-0 shadow-inner focus: outline-none focus:border-0" />
      </div>
      <div className="flex flex-col mt-2">
        <label>LinkedIn <i className="fab fa-linkedin text-xs"></i></label>
        <input type="text" className="rounded-lg p-2 bg-gray-700 border-0 shadow-inner focus: outline-none focus:border-0" />
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
  )
}