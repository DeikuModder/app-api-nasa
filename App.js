import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Routes from './src/routes/Routes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false}/>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
