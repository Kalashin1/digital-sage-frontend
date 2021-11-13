export default function CreatePostForm(){

  return (
    <form className="py-4 lg:py-12 px-4 bg-gray-700 flex flex-col shadow-lg rounded-lg relative">
      <div className="my-4">
        <label czlassName="text-2xl font-bold">Title</label>
        <input placeholder="Title, pick a good caption for your post" className="py-8 px text-6xl font-bold text-gray-200 block bg-gray-900 w-full focus:outline-none focus:border-none" />
      </div>
      <div className="my-4 absolute lg:top-20 lg:right-8 top-10 -right-6 py-2">
        <input type="file" placeholder="post image" className="block" />
      </div>
      <div className="my-4">
        <label className="text-2xl font-bold">Tags</label>
        <input placeholder="select tags"
        list="tags"
        className="w-full focus:outline-none focus:border-none border-none outline-none bg-gray-900 border border-gray-200 p-2 font-bold text-lg rounded-lg" />
        <datalist id="tags">
          <option value="javascript" />
          <option value="typeScript" />
          <option value="python" />
          <option value="blockchain" />
          <option value="ui" />
        </datalist>
      </div>
      <div className="my-4">
        <label className="text-2xl font-bold">Body</label>
        <textarea className="min-h-screen p-4 bg-gray-900 text-gray-50 font-bold text-2xl w-full">Body</textarea>
      </div>
      <div className="my-4 lg:flex justify-between">
        <button className="px-14 flex justify-end m-2 text-2xl py-2 font-bold bg-purple-900 shadow-lg rounded-md text-center
        hover:bg-gray-300 hover:text-purple-900 transition">
          Preview
        </button>
        <button className="px-14 text-2xl py-2 m-2 font-bold bg-gray-900 shadow-lg rounded-md text-center
        hover:bg-gray-300 hover:text-gray-900 transition
        ">
          Create Post
        </button>
      </div>
    </form>
  )
}
