import React from "react";
import { AntDesign } from '@expo/vector-icons';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  View,
  Button,
  ImageBackground,
  TextInput,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
const DATA = [ {
    id: 1209,
    name: "Jennifer Osato",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNa2w9p0jUB_Y90W_Nr7dMNRfFikC7GR5LTQ&usqp=CAU",
    email: "jenniferosato@yahoo.co.uk",
  },
  {
    id: 3487,
    name: "Omoyewmen Andy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXdHR7jZPJrtBHV1gYDVfJ4VdmstzNOLr3g&usqp=CAU",
    email: "Omoyewmenandy@gmail.com",
  }];
  const Empty = () => {
    return(
        <View>
          <Text style={styles.no_friends_text}>
            You haven't added any friends yet
          </Text>
        </View>
    )
}
const Friend_requests = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Friend Requests({DATA.length})</Text>
        <FlatList
          data={DATA}
          ListEmptyComponent={Empty}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image
                style={styles.profile_image}
                source={{
                  uri: item.image,
                }}
              />
              <View style={styles.seperator}>
                <View>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.msgText}>{item.email}</Text>
                </View>
                <View style={styles.resBtn}>
                <Pressable>
                <AntDesign name="closecircleo" size={40} color="red" />
                </Pressable>
                <Pressable>
                <AntDesign name="checkcircleo" size={40} color="green" />
                </Pressable>
              </View>
              </View>
             
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#000',
        width: '100%',   
    },
    item: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        gap: 10,
      },
      profile_image: {
        borderRadius: 50,
        width: 48,
        height: 48,
      },
      nameText: {
        color: '#fff'
      },
      msgText: {
        fontSize: 12,
        color: "#444857"
      },
      seperator: {
       borderBottomWidth: 1,
       borderBlockColor: "#444857",
       width: '85%',
       paddingVertical: 6,
       flexDirection: 'row',
       justifyContent: 'space-between'
      },
      resBtn: {
        flexDirection: 'row',
        gap: 10
      },
      text: {
        fontWeight: '600',
        fontSize: 20,
        color: '#fff',
        marginVertical: 8
      },
})
export default Friend_requests