import { createSlice } from "@reduxjs/toolkit";
import { ADVERTISE_INTIAL_STATE } from "../utils/Constants/global";

const initialState = {
  screens: {
    advertise: {
      isFormDirty: false,
      data: { ...ADVERTISE_INTIAL_STATE },
      activeScreen: 0,
      validations: {
        rentTitle: false,
        rentStartDate: false,
        rentEndDate: false,
        petsAllowed: false,
        laundryType: false,
        contactPreference: false,
        userType: false,
      },
      multiValidate: [
        {
          sizeSqft: false,
          rent: false,
          deposit: false,
          leaseLength: false,
          availableDate: false,
          images: false,
        },
      ],
    },
    notification: {
      count: 0,
      isMutated: false,
      chatData: null,
    },
  },
};
const mainViewSlice = createSlice({
  name: "mainView",
  initialState,
  reducers: {
    // Main
    onFormDirty: (state, action) => {
      state.screens.advertise.isFormDirty = action.payload;
    },
    onFormAdvertiseDataChange: (state, action) => {
      state.screens.advertise.data = action.payload;
    },
    onAdvertiseCurrentScreen: (state, action) => {
      state.screens.advertise.activeScreen = action.payload;
    },
    onAdvertiseValidate: (state, action) => {
      state.screens.advertise.validations = action.payload;
    },
    onAdvertiseMultiValidate: (state, action) => {
      state.screens.advertise.multiValidate = action.payload;
    },

    // Notifications
    onNotificationCount: (state, action) => {
      state.screens.notification.count = action.payload;
    },
    onNotificationMutated: (state, action) => {
      state.screens.notification.isMutated = !state.screens.notification.isMutated;
    },
    onNotificationSelectedChat: (state, action) => {
      state.screens.notification.chatData = action.payload;
    },
  },
});

export const {
  // Advertise
  onFormDirty,
  onFormAdvertiseDataChange,
  onAdvertiseCurrentScreen,
  onAdvertiseValidate,
  onAdvertiseMultiValidate,

  // Notification
  onNotificationCount,
  onNotificationMutated,
  onNotificationSelectedChat,
} = mainViewSlice.actions;
export const mainViewState = (state) => state.mainView;

export default mainViewSlice.reducer;
