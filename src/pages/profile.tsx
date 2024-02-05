import { useState } from "react"
import IDCard from "../components/shared/IDcard"
import Avatar from "../components/shared/avatar"
import Button from "../components/shared/button"
import Calendar from "../components/shared/contribution-calendar"
import { contributions, monthLabelAttributes, panelColors, weekLabelAttributes } from "../lib/contributions"
import EditProfile from "../components/dialogs/edit-profile"

const Profile = () => {
    const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

    const closeEditProfileModal = () => setIsEditProfileModalOpen(false)
    const openEditProfileModal = () => setIsEditProfileModalOpen(true)


  return (
      <div className="text-gray-200 w-full py-10">
          <div className="flex items-center space-x-8">
            <Avatar imageUrl={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            size="large" 
            />

            <div className="space-y-4">
                  <div className="space-y-1">
                      <p className="font-semibold text-xl">Ayooluwa Aduwo</p>
                        <small>Rank : Boss</small>
                  
                    <p>I am a Fraud dev.</p>
                </div>
                <ul className="space-x-1 flex ">
                        <li>
                        <a href="/" className="text-sm">Linkedin url</a>
                        </li>

                        <li>
                            <a href="/" className="text-sm">Hashnode url</a>
                        </li>
                        <li>
                            <a href="/" className="text-sm">github url</a>
                        </li>
                        <li>
                            <a href="/" className="text-sm">twitter url</a>
                        </li>
                  </ul>
                  
                    
                    <Button onClick={openEditProfileModal}>Edit Profile</Button>
            </div>
          </div>

           <hr className="w-[300px] bg-gray-700 border border-gray-700 md:w-[500px] lg:w-[900px] my-5"></hr>

           <div className="space-y-3">
                <p className="font-medium">Your Membership Badge</p>
                <IDCard username="Coding Pastor" numberOfReads={200} level={"Boss"} />
           </div>

          <hr className="w-[300px] bg-gray-700 border border-gray-700 md:w-[500px] lg:w-[900px] my-5"></hr>

          <div className="space-y-3">
              <p className="font-medium">Activity Graph</p>
             <Calendar weekLabelAttributes={weekLabelAttributes} monthLabelAttributes={monthLabelAttributes} panelColors={panelColors} values={contributions} until="2024-12-31" panelAttributes={undefined} />
          </div>

          <hr className="w-[300px] bg-gray-700 border border-gray-700 md:w-[500px] lg:w-[900px] my-5"></hr>

          <div className="space-y-4">
              <p className="font-medium">Your Activity</p>
              <div>
                  
              </div>
          </div>
          {/* misc */}
          <div>
              <EditProfile isOpen={isEditProfileModalOpen} closeModal={closeEditProfileModal} />
          </div>
    </div>
  )
}

export default Profile