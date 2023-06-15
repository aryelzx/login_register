import { NativeBaseProvider } from "native-base";
import { SigIn } from "./src/screens/SignIn";

export default function App() {
  return (

    <NativeBaseProvider>
      <SigIn/>
    </NativeBaseProvider>
  );
}

 