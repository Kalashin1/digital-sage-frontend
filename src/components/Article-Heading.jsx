export default function ArticleHeading () {
  const image = 'kaleidico-3V8xo5Gbusk-unsplash.jpg'
  return (
    <div className="article-header">
      <div className="article-header-image-container">
        <a href="some">
          <img src={image} className=" object-cover w-full h-auto" alt="" />
        </a>
      </div>
      <div className="p-4">
        <h1 className="font-bold text-4xl">I Love GQL</h1>
        <h2 className="text-2xl">Lorem ipsum dolor sit amet consectetur adipiscing elit, morbi habitant neque aenean vel egestas nunc purus, ac vivamus odio nisl iaculis habitasse.</h2>
        <div className="flex flex-row my-2">
          <div className="author-image">
            K
          </div>
          <div>
            <h3 className="text-2xl">
              John Doe
            </h3>
            <h5 className="text-xl"> Nov, 20 2022 <span className="inline-block ml-4">8 mins</span></h5>
          </div>
        </div>
      </div>
    </div>
  )
}