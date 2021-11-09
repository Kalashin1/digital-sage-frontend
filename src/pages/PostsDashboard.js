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
        <h1 className="text-4xl font-bold my-6 border-b w-44">Posts {id}</h1>
        <div className="lg:grid lg:grid-cols-4 gap-4">  
          { titles.map((t, i) => (
            <PostsCard key={i} title={t.title} body={t.body} />
          ))}
        </div>
      </div>
    </Layout>
  )
}