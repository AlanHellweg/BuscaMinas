import { createStackNavigator } from "@react-navigation/stack";
import { StackParamList } from "./types";
import Home from "../../screens/Home";
import Config from "../../screens/Config";
import Game from "../../screens/Game";

const App = createStackNavigator<StackParamList>();

const AppNavigation = () => {
  return (
    <App.Navigator initialRouteName="home">
      <App.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <App.Screen
        name="config"
        component={Config}
        options={{ headerShown: false }}
      />
      <App.Screen
        name="game"
        component={Game}
        options={{ headerShown: false }}
      />
    </App.Navigator>
  );
};

export default AppNavigation;
