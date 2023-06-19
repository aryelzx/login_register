import { NativeBaseProvider } from "native-base";
import { RouterContainer } from './src/components/RouterContainer';

export default function App() {
  
  return (
    <NativeBaseProvider>
        <RouterContainer/>
    </NativeBaseProvider>
  );
}

