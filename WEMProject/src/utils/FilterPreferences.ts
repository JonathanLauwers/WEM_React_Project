import React from "react";
import AsyncStorage from '@react-native-community/async-storage';

export const getFilterPreference = async() => {
    try {
        const value = await AsyncStorage.getItem('@SortPreference');
        const booleanValue = (value == 'true');
        return booleanValue;
    } catch (error) {
        return error;
    }
}

export const setFilterPreference = async(sort) => {
    try {
        await AsyncStorage.setItem('@SortPreference', sort + "");
    } catch (error) {
        return error;
    }
}