import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from "react-native";

export default function NewsCard({ article }) {

  const openArticle = () => {
    Linking.openURL(article.url);
  };

  return (
    <TouchableOpacity onPress={openArticle}>

      <View style={styles.card}>

        {article.urlToImage && (
          <Image
            source={{ uri: article.urlToImage }}
            style={styles.image}
          />
        )}

        <Text style={styles.title}>
          {article.title}
        </Text>

        <Text style={styles.description}>
          {article.description}
        </Text>

      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  card: {
    marginBottom: 20,
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10
  },

  image: {
    width: "100%",
    height: 180,
    borderRadius: 10
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10
  },

  description: {
    marginTop: 5,
    fontSize: 14
  }

});