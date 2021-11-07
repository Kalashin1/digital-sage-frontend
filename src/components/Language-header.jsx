export default function LanguageHeader ({ language, LanguageIcon }) {
  return(
    <div className="shadow-xl hover:bg-gray-900 transition group-hover:text-gray-200 hover:text-gray-200 text-gray-900 bg-gray-200 rounded-lg my-6 flex justify-center flex-col 
    py-6 items-center cursor-pointer">
      <i className={`text-6xl font-bold ${LanguageIcon}`} />
      <hr className="divider" />
      <h4 className="font-bold text-3xl uppercase mt-4">{ language }</h4>
    </div>
  )
}