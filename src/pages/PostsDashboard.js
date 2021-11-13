import { useParams } from "react-router-dom"
import Layout from "../components/Layout"
import PostsCard from "../components/Post-Card"

export default function PostsDashboard (){
  const { id } = useParams()
  const titles = [
    { 
      title:'views',
      body: 1
    },
    { 
      title:'likes',
      body: 1
    },
    { 
      title:'published',
      body: 1
    },
    { 
      title:'archived',
      body: 1
    },
  ]
  return(
    <Layout>
      <div className="container px-2 py-8 lg:p-12 my-8 text-gray-200">
        <h1 className="text-4xl font-bold my-6 border-b w-44">Posts {id} </h1>
        <div className="lg:grid lg:grid-cols-4 gap-4">  
          { titles.map((t, i) => (
            <PostsCard key={i} title={t.title} body={t.body} />
          ))}
        </div>
        <hr />
       <div className="flex my-6 lg:flex-row flex-col">
        <div className="lg:w-1/5">
          <ul>
            <li>Reads</li>
          </ul>
        </div>
        <div className="bg-gray-900 shadow-xl lg:w-4/5 my-2 cursor-pointer rounded flex items-center">
            <div className="m-2 w-8 h-8 rounded-full justify-center flex items-center font-bold text-xl bg-white text-gray-800 text-center">M</div>
            <div className="flex flex-col m-4">
              <h1 className="font-bold text-2xl">I Love GrapQL apis</h1>
              <div className="flex flex-col lg:flex-row lg:space-x-6 font-bold">
                <h3 className="text-xl">John Doe</h3>
                <h3>October 30 5mins read</h3>
                <h3>#javascript &nbsp; #graphql &nbsp; #webdev</h3>
              </div>
            </div>
        </div>
       </div>
      </div>
    </Layout>
  )
}