import Sidebar from "./Sidebar"
import Navbar from "./navigation"


const RootLayout = ({
    children 
}: Readonly<{
    children: React.ReactNode
}>) => {
  return (
    <div>
      <Navbar />
          <div className="flex bg-black w-full space-x-4">
              <Sidebar />
              <div className="">
                { children }
              </div>
        </div>
          
    </div>
  )
}

export default RootLayout