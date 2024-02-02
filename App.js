import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
  SectionList,
} from "react-native";
import pokemonList from "./data.json";
import groupedPokemonList from "./grouped-data.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SectionList
          sections={groupedPokemonList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item}</Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) => {
            <Text style={styles.sectionHeaderText}>{section.type}</Text>;
          }}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />} //used to separate/space components instead of margin-bottom
          SectionSeparatorComponent={() => <View style={{ height: 16 }} />} //used to separate/space components instead of margin-bottom
        />

        {/* <FlatList
        data={pokemonList}
        renderItem={({ item }) => {
          return (
            <View style={styles.card} key={item.id}>
              <Text style={styles.cardText}>{item.type}</Text>
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          );
        }}
        // horizontal
        keyExtractor={(item, index) => item.id.toString()} // or ikey or index
        ItemSeparatorComponent={<View style={{ height: 16 }} />} //used to separate/space components instead of margin-bottom
        ListEmptyComponent={
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            No Items Found
          </Text>
        } //will be rendered when there are no items in the array or no data
        ListHeaderComponent={
          <Text style={styles.headerText}>Pokemon List</Text>
        } // will be rendered at the top of the list, as a heading
        ListFooterComponent={
          <Text style={styles.footerText}>Copyright 2024</Text>
        } // will be rendered at the top of the list, as a heading
      /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 8,
  },
  cardText: {
    fontSize: 30,
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
  sectionHeaderText: {
    backgroundColor: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
