import React from "react";
import { RenderItem } from "./Pin";
import { FlatList, View } from "react-native";
import { Loading } from "../loader";
import { globalStyles } from "../../styles";
import { FilterItem } from "../filter";
import { useSearchContext } from "../../contexts/SearchContextProvider";
import * as Crypto from "expo-crypto";

export const PinterestLayout: React.FC = () => {
  const { setCurrentPage, images } = useSearchContext();

  const loadingMoreItem = () => {
    setCurrentPage((currentPage) => (currentPage = currentPage + 1));
  };

  return (
    <View style={globalStyles.pinterestLayout_container}>
      <FilterItem />
      <FlatList
        data={images}
        style={globalStyles.pinterestLayout}
        renderItem={(image) => <RenderItem item={image} />}
        keyExtractor={() => Crypto.randomUUID()}
        ListFooterComponent={() => <Loading />}
        onEndReachedThreshold={0}
        onEndReached={loadingMoreItem}
        numColumns={2}
      />
    </View>
  );
};
