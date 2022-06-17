import React from 'react';
import { View, Text } from 'react-native';

export default function SettingsScreen({ route, navigation }) {
    const { content } = route.params || ""

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings! {content}</Text>
        </View>
    );
}
