import {useState} from "react";
import Navbar from "../components/navbar/Navbar"

const Home=()=>{
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);

    return(
        <>
          <Navbar
            onLoginClick={() => setIsLoginOpen(true)}
            onSignupClick={() => setIsSignupOpen(true)}
          />

          {isLoginOpen && <div>login ok </div>}
          {isSignupOpen && <div>get started ok</div>}



        </>
    )

};

export default Home
