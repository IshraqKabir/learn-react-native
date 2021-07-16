import React from "react";

import { ScrollView, View, StyleSheet } from "react-native";

export const Container = ({ style, children }) => {
    return (
        <ScrollView>
            <View style={[ styles.wrapper, style ]}>
                {children}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
    }
})
