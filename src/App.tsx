import { MantineProvider, Text } from '@mantine/core';
import { loggedInState, authAtom } from "../src/store";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

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
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
      <Text>Welcome to Obsidian, strongest payroll integration! NOW with recoil</Text>
      <button onClick={() => userActions[auth ? "logout" : "login"]("email", "password")}>Log { auth ? "out":"in"}</button>
    </MantineProvider>
  );
}
