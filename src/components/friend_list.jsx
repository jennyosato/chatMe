import React from "react";
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
} from "react-native";
const DATA = [
  {
    id: 1209,
    name: "Jennifer Osato",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNa2w9p0jUB_Y90W_Nr7dMNRfFikC7GR5LTQ&usqp=CAU",
    lastMsg: "Hey you",
  },
  {
    id: 3487,
    name: "Omoyewmen Andy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXdHR7jZPJrtBHV1gYDVfJ4VdmstzNOLr3g&usqp=CAU",
    lastMsg: "Hope you got my gift",
  },
];

const Friend_list = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.addFriend}>
        <Text style={styles.addFriendText}>Add Friend</Text>
        <TextInput
          style={styles.input}
          placeholder="Add friend by email"
          keyboardType="email-address"
        />
        <View style={styles.btn}>
          <Button
            title="Send Request"
            color={'#fff'}
            onPress={() => console.log("friend request sent")}
          />
        </View>
      </View>
      <View>
        <Text style={styles.text}>Friends List</Text>
      </View>
      {DATA.length > 0 ? (
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image
                style={styles.profile_image}
                source={{
                  uri: item.image,
                }}
              />
              <View>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.msgText}>{item.lastMsg.substring(40)}</Text>
              </View>
            </View>
          )}
        />
      ) : (
        <View>
          <Text style={styles.no_friends_text}>
            You haven't added any friends yet
          </Text>
        </View>
      )}
     
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black'
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 6,
    padding: 10,
    backgroundColor: "#D5D7DE",
  },
  btn: {
    backgroundColor: "#107C10",
    paddingVertical: 4,
    paddingHorizontal: 2,
    textAlign: "right",
    width: '50%',
    
  },
  no_friends_text: {
    fontSize: 24,
    color: "darkblue",
    fontWeight: 700,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#444857",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  profile_image: {
    borderRadius: "50%",
    width: 24,
    height: 24,
  },
  addFriend: {
    flex: 1,
    gap: 4
  },
  addFriendText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 30,
    textAlign: 'center'
  },
  text: {
    fontWeight: '600',
    fontSize: 36,
    lineHeight: 12
  },
  bgimage: {
    flex: 1,
    paddingHorizontal: 20
  }
});
export default Friend_list;
