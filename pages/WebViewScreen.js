import React from "react";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

const githubUrl = "https://github.com/Tobbs101";

const WebViewScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: githubUrl }} />
    </SafeAreaView>
  );
};

export default WebViewScreen;
