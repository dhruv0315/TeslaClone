import React from "react";
import { StyleSheet, Text, View, ImageBackground, Dimensions } from "react-native";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
import data from "./data";


const CarItem = (props) => {

  const { name, tagline, taglineCTA, image } = props.car;
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
            <Button
                type="primary"
                content={"More Information"}
                onPress={() => {
                    navigation.navigate('CustomPage');
                }}
            />
              <Button
                type="secondary"
                content={"Existing Inventory"}
                onPress={() => {
                    navigation.navigate('InventoryScreen');
                }}
            />
      </View>
    </View>
  );
};

export default CarItem;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height,
    },
    titles: {
        marginTop: '35%',
        width: '100%',
        alignItems: 'center',
      },
      title: {
        fontSize: 40,
        fontWeight: '500',
      },
      subtitleCTA: {
        textDecorationLine: 'underline',
      },
      subtitle: {
        fontSize: 16,
        color: '#5c5e62'
      },
    
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },
      buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
      }
});
