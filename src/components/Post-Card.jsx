export default function PostsCard({ title, body }){
  return(
    <div className="shadow-xl hover:bg-gray-900 transition group-hover:text-gray-200 hover:text-gray-200 text-gray-900 bg-gray-200 rounded-lg my-3 flex justify-center flex-col 
    py-6 items-center cursor-pointer">
      <h4 className="font-bold text-3xl uppercase">{ title }</h4>
      <hr className="divider" />
      <h4 className="font-bold text-3xl uppercase">{ body }</h4>
    </div>
  )
}