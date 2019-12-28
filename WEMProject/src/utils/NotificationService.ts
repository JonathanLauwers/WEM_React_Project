import React, { Component } from "react";
import { NotifService } from "../utils/NotificationService";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import PushNotificationIOS from "@react-native-community/push-notification-ios";

var PushNotification = require("react-native-push-notification");

export const createNotification = (message, title) => {
  PushNotification.localNotificationSchedule({
    title: title,
    message: message,
    date: new Date(Date.now() + 12 * 1000)
  }); //12 seconds here })
};

PushNotification.configure({
  onNotification: function(notification) {
    console.log("NOTIFICATION:", notification);
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  }
});
