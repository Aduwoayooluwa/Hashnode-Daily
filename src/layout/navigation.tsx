import { useState } from "react";
import Button from "../components/shared/button";
import { SignedOut, SignedIn, SignIn, SignUp, SignOutButton } from "@clerk/clerk-react"
import Modal from "./modal";
import { useUser } from "@clerk/clerk-react";
const Navbar = () => {
    const [isAuthBtn, setIsAuthBtn] = useState(false);
    const [isRegBtn, setIsRegBtn] = useState(false);

    const { user }  = useUser();

    return (
        <nav className="z-20 bg-black border-b border-gray-700 sticky top-0 w-full text-white p-4 flex justify-between items-center">
            <div>
                <h1 className="text-xl font-bold">Hashnode Daily</h1>
            </div>
                <SignedOut>
                        <div className="flex items-center space-x-4">
                        <Button onClick={() => setIsAuthBtn(true)}>Login</Button>
                        <Button onClick={() => setIsRegBtn(true)}  variant="secondary">Register</Button>
                    </div>
                </SignedOut>
                

                <SignedIn>
                    <div className="font-semibold flex space-x-4">
                        <SignOutButton />
                        <p>{user?.username ?? "Coding Pastor"}</p>    
                    </div> 
            </SignedIn>
            
            <Modal isOpen={isAuthBtn} onClose={() => setIsAuthBtn(false)}> 
                <SignIn />
            </Modal>
            <Modal isOpen={isRegBtn} onClose={() => setIsRegBtn(false)}> 
                <SignUp />
            </Modal>
        </nav>
    );
};

export default Navbar;
