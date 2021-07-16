import React, { useState } from "react";
import { TouchableOpacity, ActivityIndicator, View, StyleSheet, Text } from "react-native";

import { colors } from "../../../assets/themes/colors";

export const MyButton = ({ title, loading, variant, disabled, onPress, ...props }) => {
    const getBackgroundColor = () => {
        if (disabled) return colors.grey;

        return colors[variant];
    }

    return (
        <TouchableOpacity disabled={disabled}
            onPress={onPress}
            style={[styles.wrapper, {
                backgroundColor: getBackgroundColor(),
            }]}>

            <View>
                {loading && !disabled ?
                    <ActivityIndicator color={colors.white} />
                    : null}
                {!loading && title ? <Text style={{ color: disabled ? "black" : "white" }}>{title}</Text> : null}
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 12,
        paddingHorizontal: 5,
        marginVertical: 10,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
    },
});
