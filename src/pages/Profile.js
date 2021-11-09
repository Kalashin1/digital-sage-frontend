import { useParams } from "react-router-dom"
import Layout from "../components/Layout"
import ProfileCard from "../components/Profile"
import SocialMediaInfoCard from "../components/SocialMedia"

export default function Profile () {
  const { id } = useParams()
  return(
    <Layout>
      <div className="container px-2 py-8 lg:p-12 my-8 text-gray-200">
        <h1 className="text-4xl font-bold my-6 border-b w-44">Profile {id}</h1>
        <div className="grid lg:grid-cols-5 py-2 lg:py-6">
          <div className="rounded-full grid col-span-1 my-4 lg:my-0 shadow-lg w-24 h-24 bg-gray-900 justify-center items-center text-6xl">
            L
          </div>
          <div className="grid lg:col-span-4">
            <ProfileCard />
            <SocialMediaInfoCard />
          </div>
        </div>
      </div>
    </Layout>
  )
}