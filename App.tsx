import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flexGrow: 1 }}>
        <StatusBar backgroundColor="#fff" style="dark" />
        <Routes />
      </SafeAreaView>
    </Provider>
  );
}


