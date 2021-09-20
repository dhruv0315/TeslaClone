import React from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import CarItem from "./CarItem";
import data from "./data";

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarsList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  }
});
