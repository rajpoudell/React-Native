import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button";

export default function App() {
  const backgroundImage = "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg";
  return (
    <View style={styles.container}>
      <ImageBackground
      source={{uri :backgroundImage}}
      style ={styles.background}
      >
        <Text style={{ color: "red", fontSize:20 , textAlign:'center'}}>
          Open up App.js to start working on your app!
        </Text>
        <View style={styles.footerContainer}>
        <Button label="Choose a photo" msg="choose"/>
        <Button label="Use this photo" msg="use this "/>
      </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background:{
    flex:1,
    resizeMode:"cover",
    justifyContent: "center",
    width:'100%',
    height:'100%',
  },
  image: {
    width: 200,
    height: 200,
  },
});
