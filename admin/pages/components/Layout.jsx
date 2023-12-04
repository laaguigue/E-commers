import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "./Nav";

export default function Layout({children}) {
  const{ data: session } = useSession()
  if(!session){
  return (
  <div className=" -blue-900 w-screen h-screen flex items-center">
    <div className="text-center w-full">
      <button onClick={() => signIn ('google')} className='bg-white text-black p-2 px-4 rounded-lg'>Login With Google</button>
      <button onClick={( ) => signOut ('google')} className='bg-black text-white p-3 px-4 rounded-lg'>start in the last thing you prouvide to do in here</button>
  </div>
    </div>
  )
}
return (
  <div className="bg-blue-900 min-h-screen text-black flex">
    <Nav/>
    <div className="bg-white flex"></div>
    <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
    <div className="bg-transparent flex-initial mt-3 rounded-lg"></div>
    {children}
    </div>
  </div>
  
);
}
