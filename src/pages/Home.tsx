import { useState } from 'react'
import PostsPage from '../components/posts/Posts'
import Button from '../components/shared/button'
import AddBlog from '../components/dialogs/add-blog'

 
function Home() {
  const [isAddBlogModalOpen, setIsAddBlogModalOpen] = useState(false)
  const [hostUrl, setHostUrl] = useState(null);

  const closeAddBlogModal = () => setIsAddBlogModalOpen(false);
  const openAddBlogModal = () => setIsAddBlogModalOpen(true);

  return (
    <>
      <header className="flex items-center justify-between pl-4 pr-20 py-4">
        <h2 className='text-gray-100 font-semibold text-xl'>Articles you chose</h2>

        <Button onClick={openAddBlogModal}>Add a Blog</Button>
      </header>
      <div>
        <PostsPage hostUrl={hostUrl} />
      </div>
      {/* modal or misc part */}
      <div>
          <AddBlog setHostUrl={setHostUrl} isOpen={isAddBlogModalOpen} closeModal={closeAddBlogModal} />
      </div>
    </>
  )
}

export default Home
