import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, Text, StyleSheet, ActivityIndicator } from "react-native";
import NewsCard from "./components/NewsCard";
import { getNews } from "./services/newsApi";

export default function App() {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const articles = await getNews();
    setNews(articles);
    setLoading(false);
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.loader}>
        <ActivityIndicator size="large" />
        <Text>Loading News...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Top News</Text>

      <FlatList
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <NewsCard article={item} />}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 40,
    padding: 15
  },

  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20
  },

  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }

});