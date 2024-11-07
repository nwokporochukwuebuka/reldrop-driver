import React from 'react';
import { View, Text, StyleSheet, ViewProps } from 'react-native';

export default function Splash(props: React.JSX.IntrinsicAttributes & React.JSX.IntrinsicClassAttributes<View> & Readonly<ViewProps>) {
    return (
        <View {...props} style={style.body}>
            <Text>Spalshhhhh</Text>
        </View>
    );
}


const style = StyleSheet.create({
    body: {
        backgroundColor: '#fff',
        flex: 1,
        color: '#000'
    }
})