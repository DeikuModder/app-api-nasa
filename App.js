import {Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import Routes from './src/routes/Routes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[{paddingTop: Platform.OS === 'android' && 30}, styles.container]}>
        <Routes />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
