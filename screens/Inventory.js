import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import Header from "../components/Header";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const InventoryScreen = () => {
  const data = [
    {
      id: "d1",
      name: "Model S",
      image: require("../assets/CustomOrderPage/modelSImage.png"),
      price: "$82,990",
    },
    {
      id: "d2",
      name: "Model X",
      image: require("../assets/CustomOrderPage/modelXBlack.png"),
      price: "$93,190",
    },
    {
      id: "d3",
      name: "Model 3",
      image: require("../assets/CustomOrderPage/model3Red.png"),
      price: "$34,190",
    },
    {
      id: "d4",
      name: "Model S",
      image: require("../assets/CustomOrderPage/modelSRed.png"),
      price: "$82,990",
    },
    {
      id: "d5",
      name: "Model X",
      image: require("../assets/CustomOrderPage/modelXGrey.png"),
      price: "$93,190",
    },
    {
      id: "d6",
      name: "Model 3",
      image: require("../assets/CustomOrderPage/model3Blue.png"),
      price: "$34,190",
    },
    {
      id: "d7",
      name: "Model Y",
      image: require("../assets/CustomOrderPage/modelYBlack.png"),
      price: "$48,190",
    },
  ];

  const choice = [
    {
      id: "s1",
      title: "Add",
    },
    {
      id: "s2",
      title: "Don't Add",
    },
  ];

  const [selected, setSelected] = useState("");
  const [selectedChoice, setSelectedChoice] = useState("");
  const [modalVisible, setModalVisible] = useState("");
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <Header />
      <Text
        style={{ top: 100, marginLeft: 10, fontSize: 20, fontWeight: "500" }}
      >
        Our Current Inventory
      </Text>
      <View style={{ height: 200 }}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ top: 120 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, name, image }, item }) => (
            <View>
              <TouchableOpacity
                onPress={() => setSelected(item)}
                style={[id === selected.id ? styles.highlight : styles.card]}
              >
                <Image
                  style={{ height: 70, width: 170, resizeMode: "contain" }}
                  source={item.image}
                />
                <View>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 11,
                      fontWeight: "200",
                    }}
                  >
                    {item.price}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={{ top: 150 }}>
        <Text style={{ fontWeight: "500", fontSize: 20, marginLeft: 13 }}>
          Full Self-Driving Capability
        </Text>
        <FlatList
          data={choice}
          style={{ top: 20, left: 20 }}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, title }, item }) => (
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => setSelectedChoice(item)}
                style={[
                  id === selectedChoice.id
                    ? styles.buttonHighlight
                    : styles.button,
                ]}
              >
                <Text style={{ textAlign: "center", top: 7, color: "white" }}>
                  {title}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={{ top: 300, flex: 1, alignItems: "center" }}>
        <TouchableOpacity
          style={{
            width: "70%",
            height: 30,
            backgroundColor: "#212121",
            borderRadius: 20,
          }}
          onPress={() => setModalVisible(true)}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              top: 6,
              textTransform: "uppercase",
            }}
          >
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <Header />
        <View style={{ backgroundColor: "white", height: "100%" }}>
          <Text
            style={{
              color: "black",
              top: 200,
              textAlign: "center",
              fontSize: 30,
              fontWeight: "500",
            }}
          >
            Order Placed
          </Text>
          <View style={{ top: 230, alignItems: "center" }}>
            <Image
              source={selected?.image}
              style={{ height: 300, width: 300, resizeMode: "contain" }}
            />
            <Text style={{ bottom: 50, fontWeight: "500", fontSize: 20 }}>
              Your {selected?.name} will arrive in March.
            </Text>
            <TouchableOpacity
              style={{
                width: "90%",
                height: 40,
                backgroundColor: "#4769D9",
                borderRadius: 100,
                top: 50
              }}
              onPress={() => navigation.navigate('HomeScreen')}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  top: 9,
                  textTransform: "uppercase",
                  fontSize: 17,
                }}
              >
                Ok
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ bottom: 165 }}>
            <Icon
              name="checkmark-circle"
              type="ionicon"
              color="green"
              size={40}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default InventoryScreen;

const styles = StyleSheet.create({
  cars: {
    height: 70,
    width: 170,
    resizeMode: "contain",
  },
  card: {
    height: 105,
    width: "95%",
    backgroundColor: "#f1f1f1",
    left: 10,
    borderRadius: 20,
  },
  highlight: {
    backgroundColor: "#d7d7d7",
    borderRadius: 20,
    width: "95%",
    left: 10,
    height: 105,
  },
  button: {
    width: 100,
    height: 30,
    backgroundColor: "#aeaeae",
    marginHorizontal: 35,
    borderRadius: 20,
  },
  buttonHighlight: {
    width: 100,
    height: 30,
    backgroundColor: "#4769D9",
    marginHorizontal: 35,
    borderRadius: 20,
  },
  modal: {
    height: "30%",
    width: "80%",
    backgroundColor: "black",
    flex: 1,
  },
});
