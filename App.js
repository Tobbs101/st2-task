import React from "react";
import { Text, SafeAreaView, Image, Button, View } from "react-native";
import { viewStyle, textStyle, imageStyle, buttonStyle } from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import WebViewScreen from "./pages/WebViewScreen";
import { createStackNavigator } from "@react-navigation/stack";

const HomeScreen = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("GitHub");
  };

  return (
    <SafeAreaView style={viewStyle}>
      <Text style={textStyle}>Tobi Idowu</Text>
      <Image source={require("./assets/profile.jpg")} style={imageStyle} />
      <View style={buttonStyle}>
        <Button
          title="Open GitHub"
          color="#444654"
          onPress={handleNavigation}
        />
      </View>
    </SafeAreaView>
  );
};

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GitHub" component={WebViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
