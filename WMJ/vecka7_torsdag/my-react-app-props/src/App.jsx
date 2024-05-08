import './App.css'
import BlogList from './BlogList'

function App() {
  const blogs = [
    { title: 'my first blog post', body: 'Lorem ipsum dolor et amet lalalala', author: 'Mario', id: 1 },
    { title: 'my second blog post', body: 'Lorem ipsum dolor et amet lalalala', author: 'Luigi', id: 2 },
    { title: 'my 3rd blog post', body: 'Lorem ipsum dolor et amet lalalala', author: 'Toad', id: 3 },
    { title: 'my 4 blog post', body: 'Lorem ipsum dolor et amet lalalala', author: 'Yoshi', id: 4 },
    { title: 'my FIVE blog post', body: 'Lorem ipsum dolor et amet lalalala', author: 'Peach', id: 5 },
  ]
  return (
    <>
      <BlogList blogs={blogs} test="This is a blog post" />
    </>
  )
}

export default App
