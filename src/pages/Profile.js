import { useParams } from "react-router-dom"
import Layout from "../components/Layout"

export default function Profile () {
  const { id } = useParams()
  return(
    <Layout>
      <div className="container p-12 my-8 text-gray-200">
        <h1 className="text-4xl font-bold my-6 border-b w-44">Profile {id}</h1>
        <div className="">
          <div className="rounded-full shadow-lg w-24 h-24 bg-gray-700 flex justify-center items-center text-6xl">
            L
          </div>
        </div>
      </div>
    </Layout>
  )
}