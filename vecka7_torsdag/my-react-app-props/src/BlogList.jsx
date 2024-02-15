const BlogList = ({ blogs, test }) => {
  return (
    <>
      <p>{test}</p>
      {blogs.map((blogItem) => (
        <>
          <p>{blogItem.title}</p>
          <p>{blogItem.body}</p>
          <p>{blogItem.author}</p>
          <p>{blogItem.id}</p>
          <hr />
        </>
      ))}
    </>
  )
}
export default BlogList