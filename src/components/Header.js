import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => (
    <View style={style.container}>
        <Text style={style.title}>{ props.title }</Text>
    </View>
);

const style = {
    container: {
        marginTop: 30,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        color: '#fff',
        padding: 10,
    }
};

export default Header;
