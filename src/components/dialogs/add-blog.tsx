import { useState } from "react"
import Modal from "../../layout/modal"
import Button from "../shared/button"
import Input from "../shared/input"
import { AnimatePresence } from 'framer-motion'

interface AddBlogProps {
    isOpen: boolean
    closeModal: () => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setHostUrl: React.Dispatch<React.SetStateAction<any>>
}
const AddBlog = ({ isOpen, closeModal, setHostUrl }: Readonly<AddBlogProps>) => {
    const [hostValue, setHostValue] = useState("");

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setHostValue(value)
    }
  return (
    <AnimatePresence>
      <Modal isOpen={isOpen} onClose={closeModal}>
          <div className="space-y-6 w-full grid place-items-center">
              <h2 className="text-gray-100 font-semibold text-lg text-center">Add your fav Blog</h2>
              <Input value={hostValue} onChange={handleInput} placeholder={"ex: codingpastor.dev"} />
              <Button onClick={() => setHostUrl(hostValue)}>Add</Button>
          </div>
    </Modal>
    </AnimatePresence>
  )
}

export default AddBlog