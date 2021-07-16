import React, { useState } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";

import { colors } from "../../../assets/themes/colors";

export const Input = ({ label, icon, iconPosition, style, value, setValue, error, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);

    const getFlexDirection = () => {
        if (iconPosition == "right") {
            return "row-reverse";
        }

        return "row";
    }

    const getBorderColor = () => {
        if (isFocused) {
            return colors.primary;
        }

        if (error) {
            return colors.danger;
        }

        return colors.grey;
    }

    return (
        <View style={styles.outerContainer}>
            {label ?
                <Text>{label}</Text>
                : null}

            <View style={[styles.wrapper, {
                flexDirection: getFlexDirection(),
                borderColor: getBorderColor(),
                ...style,
            }]}>
                {icon && (
                    <View>
                        {icon}
                    </View>

                )}
                <TextInput
                    style={styles.textInput}
                    value={value}
                    onChangeText={(text) => setValue(text)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
            </View>

            {error ? (
                <Text style={styles.error}>
                    {error}
                </Text>
            ): null}
        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        paddingVertical: 12,
    },
    textInput: {
        flex: 1,
        color: colors.black,
    },
    wrapper: {
        height: 42,
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 5,
        alignItems: "center",
        paddingHorizontal: 5,
    },
    error: {
        color: colors.danger,
        paddingTop: 5,
    }
});
