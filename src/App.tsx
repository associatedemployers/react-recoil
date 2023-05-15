import { MantineProvider, Text } from '@mantine/core';
import { loggedInState } from "../src/store";
import { useRecoilState, useRecoilValue } from "recoil";

export default function App() {
  const [isLoggedIn, login] = useRecoilState(loggedInState);
  
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
      <Text>Welcome to Obsidian, strongest payroll integration! NOW with recoil</Text>
      <button onClick={() => login({email:"sd",password:isLoggedIn ? null : "12"})}>Log {isLoggedIn?"out":"in"}</button>
    </MantineProvider>
  );
}
