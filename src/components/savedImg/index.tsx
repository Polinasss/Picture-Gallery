import { Text, View, Image, ScrollView, Pressable } from "react-native";
import { useDataContext } from "../../contexts/DataContextProvider";
import { globalStyles } from "../../styles";
import { FontAwesome } from "@expo/vector-icons";
import * as Crypto from "expo-crypto";

export const SavedImg = () => {
  const { userSavedImg, setUserSavedImg } = useDataContext();

  return (
    <ScrollView style={{ marginTop: 10 }}>
      <View style={globalStyles.savedImg_container}>
        {userSavedImg.slice(1).map((obj) => (
          <View key={Crypto.randomUUID()}>
            <Pressable
              onPress={() =>
                setUserSavedImg(userSavedImg.filter((el) => el.id !== obj.id))
              }
              style={globalStyles.like}
            >
              <FontAwesome name="heart" size={24} color="red" />
            </Pressable>
            <Image style={globalStyles.pin} source={{ uri: obj.url }} />
            <Text style={globalStyles.alt_description}>
              {obj.alt_description}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
