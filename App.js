import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from "./navigation/AppNavigator"

export default function App() {
    return (
        <>
            <StatusBar style="light"/>
            <SafeAreaProvider>
                <AppNavigator />
            </SafeAreaProvider>
        </>
    );
}

const styles = StyleSheet.create({
});
