import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import useAppTheme from "./app/utils/Theme";
import "./gesture-handler";
import AppNavigation from "./app/navigation/AppNavigation";

function App(): React.JSX.Element {
  const theme = useAppTheme();

  return (
    <NavigationContainer theme={theme}>
      <AppNavigation />
    </NavigationContainer>
  );
}

export default App;
