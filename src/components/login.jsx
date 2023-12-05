import { StatusBar } from "expo-status-bar";
import { AntDesign } from '@expo/vector-icons';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  View,
  Button,
  Alert,
  ImageBackground,
  TextInput, ScrollView
} from "react-native";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={require("../../assets/bgchat.jpeg")} resizeMode="cover" style={styles.chat_bg}>

            <View>
                <Text style={styles.logo}>ChatMe</Text>
            </View>
          <Text style={styles.headingText}>Login</Text>
          <View>
            <Text style={styles.labelText}>Email</Text>
            <TextInput style={styles.input} keyboardType="email-address"/>
          </View>
          <View>
            <Text style={styles.labelText}>Password</Text>
            <TextInput style={styles.input}/>
          </View>
          <View style={styles.login_btn}>
            <Button
              color="#fff"
              title="Login"
              onPress={() => Alert.alert("Button clicked")}
            />  
          </View>
          <Text>Don't have an account yet? </Text>
          <View style={styles.login_divider}>
            <View style={[styles.lines, styles.left_divider]} />
            <Text style={styles.spans}>OR</Text>
            <View style={[styles.lines, styles.right_divider]}/>
          </View>
          <View style={styles.loginBtn}>
            <Image source={require("../../assets/google.png")} />
            <Button
              color="#fff"
              title="Login with Google"
              onPress={() => Alert.alert("Button clicked")}
            />  
          </View>
          <View style={styles.loginBtn}>
            <AntDesign name="twitter" size={28} color="#1DA1F2" />
            <Button
              color="#fff"
              title="Login with Twitter"
              onPress={() => Alert.alert("Button clicked")}
            />  
          </View>
          <View style={styles.loginBtn}>
            <AntDesign name="facebook-square" size={28} color="#4267B2" />
            <Button
              color="#fff"
              title="Login with Facebook"
              onPress={() => Alert.alert("Button clicked")}
            />  
          </View>
         
          
          
         
        </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    width: '100%',
    justifyContent: "center",
  },
  headingText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 30
    // textAlign: "center",
  },
  loginBtn: {
    backgroundColor: "#444857",
    flexDirection: "row",
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: 'space-evenly'
  },
  chat_bg: {
    flex: 1,
    // justifyContent: 'center',
    paddingHorizontal: 50,
    gap: 8
   
  },
  logo: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 50
  },
  login_divider: {
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
    marginVertical: 30
  },
  lines: {
     position: 'absolute',
     top: '50%',
     height: '20%',
     width: '41%',
     backgroundColor: "#444857",
  },
  spans: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  left_divider: {
    left: 0,

  },
  right_divider: {
    right: 0,
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderColor: '#D5D7DE',
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#D5D7DE'
  },
  labelText: {
    fontSize: 15,
    color: 'white',
    fontWeight: '700',
    paddingVertical: 4

  },
  login_btn: {
    backgroundColor: '#107C10',
    flexDirection: "row",
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 20,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: 'center'
  }

});
export default Login;
