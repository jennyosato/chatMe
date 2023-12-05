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
  Pressable
} from "react-native";
const DATA = [
  {
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
  },
  {
    id: 1219,
    name: "Jennifer Osato",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNa2w9p0jUB_Y90W_Nr7dMNRfFikC7GR5LTQ&usqp=CAU",
    email: "jenniferosato@yahoo.co.uk",
  },
  {
    id: 3488,
    name: "Omoyewmen Andy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXdHR7jZPJrtBHV1gYDVfJ4VdmstzNOLr3g&usqp=CAU",
    email: "Omoyewmenandy@gmail.com",
  },
  {
    id: 1229,
    name: "Jennifer Osato",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNa2w9p0jUB_Y90W_Nr7dMNRfFikC7GR5LTQ&usqp=CAU",
    email: "jenniferosato@yahoo.co.uk",
  },
  {
    id: 3489,
    name: "Omoyewmen Andy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXdHR7jZPJrtBHV1gYDVfJ4VdmstzNOLr3g&usqp=CAU",
    email: "Omoyewmenandy@gmail.com",
  },
  {
    id: 1239,
    name: "Jennifer Osato",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNa2w9p0jUB_Y90W_Nr7dMNRfFikC7GR5LTQ&usqp=CAU",
    email: "jenniferosato@yahoo.co.uk",
  },
  {
    id: 3490,
    name: "Omoyewmen Andy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXdHR7jZPJrtBHV1gYDVfJ4VdmstzNOLr3g&usqp=CAU",
    email: "Omoyewmenandy@gmail.com",
  },
  {
    id: 1249,
    name: "Jennifer Osato",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNa2w9p0jUB_Y90W_Nr7dMNRfFikC7GR5LTQ&usqp=CAU",
    email: "jenniferosato@yahoo.co.uk",
  },
  {
    id: 3491,
    name: "Omoyewmen Andy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXdHR7jZPJrtBHV1gYDVfJ4VdmstzNOLr3g&usqp=CAU",
    email: "Omoyewmenandy@gmail.com",
  },
];
const Empty = () => {
    return(
        <View>
          <Text style={styles.no_friends_text}>
            You haven't added any friends yet
          </Text>
        </View>
    )
}


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
          <Pressable style={styles.btn} onPress={() => console.log('Send friend request')}>
            <Text style={styles.btn_txt}>Send Request</Text>
          </Pressable>
        
        
      </View>
      <View>
        <Text style={styles.text}>Friends List</Text>
      </View>
      
        <FlatList
          data={DATA}
    
          ListEmptyComponent={Empty}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image
                style={styles.profile_image}
                source={{
                  uri: item.image,
                }}
              />
              <View style={styles.seperator}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.msgText}>{item.email}</Text>
              </View>
            </View>
          )}
        />
     
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 6,
    padding: 10,
    backgroundColor: "#D5D7DE",
    width: '100%'
  },
  btn: {
    backgroundColor: "#107C10",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 2,
    borderRadius: 4,
    elevation: 3,
    textAlign: 'right',
    width: '30%',
    alignSelf: 'flex-end'
  },
  btn_txt: {
    color: '#fff',
    textAlign: 'justify'
  },
  no_friends_text: {
    fontSize: 16,
    color: "white",
    fontWeight: 700,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
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
  addFriend: {
    gap: 6, 
    marginHorizontal: 15, 
    position: 'relative'
  },
  addFriendText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 4
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    color: '#fff'
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
   width: '100%',
   paddingVertical: 6
  },
 
});
export default Friend_list;
