import Layout from '../components/Layout'
import { useParams } from 'react-router-dom'
import CreatePostForm from '../components/Create-Post-form'

export default function CreatePost() {
  const { id } = useParams()
  return (
    <Layout>
      <div className="container px-2 py-8 lg:p-12 my-8 text-gray-200">
        <h1 className="text-4xl font-bold my-6 border-b w-44">Create Post {id}</h1>
        <div className='my-4 p-2'>
          <CreatePostForm />
        </div>
      </div>
    </Layout>
  )
}