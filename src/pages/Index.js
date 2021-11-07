import Layout from '../components/Layout'
import ArticleHeading from '../components/Article-Heading'
import LanguageHeader from '../components/Language-header'

export default function Home(){
  let icons = [
    {
      icon: 'fab fa-java',
      language: 'java'
    },
    {
      icon: 'fab fa-php',
      language: 'php'
    },
    {
      icon: 'fab fa-python',
      language: 'python'
    }
  ]

  let frameworks = [
    {
      icon: 'fab fa-aws',
      language: 'aws'
    },
    {
      icon: 'fab fa-react',
      language: 'react'
    },
    {
      icon: 'fab fa-angular',
      language: 'angular'
    }
  ]

  return (
    <Layout>
      <div className="px-4 py-12 my-8 text-white grid col-span-2">
        <h1 className="text-4xl font-bold my-6 border-b w-44">Featured Posts</h1>
        <div className='grid lg:grid-cols-2 gap-6'>
          <ArticleHeading />
          <ArticleHeading />
        </div>
        <h1 className="text-4xl font-bold my-6 border-b w-44">Languages</h1>
        {/* Languages */}
        <div className='grid lg:grid-cols-3 gap-6'>
          { icons.map(icon => (
            <LanguageHeader language={icon.language} 
              LanguageIcon={icon.icon} />
          ))  }
        </div>
        <h1 className="text-4xl font-bold my-6 border-b w-44">Frameworks</h1>
        {/* frame works */}
        <div className='grid lg:grid-cols-3 gap-6'>
          { frameworks.map(icon => (
            <LanguageHeader language={icon.language} 
              LanguageIcon={icon.icon} />
          ))  }
        </div>
      </div>
    </Layout>
  )
}