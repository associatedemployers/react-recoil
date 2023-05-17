import { MantineProvider, Text, Box, BackgroundImage, Center } from '@mantine/core';
import { loggedInState, authAtom } from "../src/store";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import './App.css';
import { InputTooltip } from '../components/login';

export default function App() {  
function useUserActions () {
  const setAuth = useSetRecoilState(authAtom);
  
    const login = async (email, password) => {
        const response = await fetch(`http://localhost:3000/login?password=${password}&email=${email}`,{ method: 'GET' });
        let {user} = await response.json();
        setAuth(user);
    }
    const logout = async (email, password) => {
        setAuth(null);
    }
       return {
        login,
        logout
    }
}
  const userActions = useUserActions();
  const auth = useRecoilValue(authAtom);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
         <nav>
  <div className="logo">
    <h1>
      <span className="slate">Slate</span>
      <span className="bar">|</span>
      <span className="obsidian">Obsidian</span>
    </h1>
    <h2>by Associated Employers</h2>
  </div>
        <div className="menu">
    <a href="#" className="login_btn" role='button' onClick={() => userActions[auth ? "logout" : "login"]("email", "password")}>Log {auth ? "out" : "in"}</a>
  </div>
</nav>

      <div className="main">
        {!auth && <Box className='selection'>
          <InputTooltip />
        </Box>
        }
        {auth && <Box className=''>
          <div className="hero hero__payroll">
            <h1>Process Payroll With <strong>Accuracy</strong></h1>
          </div>

          {/* <div className="hero hero__license">
            <h1>
              Want to license Obsidian for your payroll business?
            </h1>
            <h2>Contact us by email <a href="mailto:obsidian@slatepayroll.com">obsidian@slatepayroll.com</a></h2>
            </div>         */}
          </Box>
        }
  
</div>

<footer>
  © 2023 Associated Employers. All Rights Reserved.
      </footer>     
    
    </MantineProvider>
  );
}
