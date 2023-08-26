import React from "react";
import { Text, View, Image, ScrollView, Pressable } from "react-native";
import { globalStyles } from "../../styles";
import { useDataContext } from "../../contexts/DataContextProvider";
import { FontAwesome } from "@expo/vector-icons";
import { IModalImgInfo } from "../../types";

export const ModalImgInfo: React.FC<IModalImgInfo> = ({ item }) => {
  const { userSavedImg, setUserSavedImg } = useDataContext();
  
  const isImgLiked = () => {
    if (userSavedImg.find((obj) => obj.id === item.item.id)) {
      setUserSavedImg(userSavedImg.filter((obj) => obj.id !== item.item.id));
    } else
      setUserSavedImg((prev) => [
        ...prev,
        {
          id: item.item.id,
          alt_description: item.item.alt_description,
          url: item.item.urls.regular,
          authorsName: item.item.user.name,
          views: item.item.views,
          downloads: item.item.downloads,
        },
      ]);
  };

  return (
    <ScrollView key={item.item.id}>
      <Pressable onPress={isImgLiked} style={globalStyles.like}>
        {userSavedImg.find((obj) => obj.id === item.item.id) ? (
          <FontAwesome name="heart" size={24} color="red" />
        ) : (
          <FontAwesome name="heart-o" size={24} color="white" />
        )}
      </Pressable>
      <Image
        style={globalStyles.modalImg}
        source={{ uri: item.item.urls.full }}
      />
      <View style={globalStyles.title}>
        <Text style={{ fontWeight: "bold" }}>{item.item.alt_description}</Text>
        <View style={globalStyles.title_description}>
          <Text>Author: {item.item.user.name}</Text>
          <View>
            <Text>Views: {item.item.views}</Text>
            <Text>Downloads: {item.item.downloads}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
