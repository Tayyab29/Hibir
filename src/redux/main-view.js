import { createSlice } from "@reduxjs/toolkit";
import { ADVERTISE_INTIAL_STATE } from "../utils/Constants/global";

const initialState = {
  screens: {
    advertise: {
      isFormDirty: false,
      // data: {
      //   isPackage: "",
      //   propertyUnit: "",
      //   propertyAdress: "",
      //   propertyType: "",
      //   propertyBeds: "",
      //   propertyBaths: "",
      //   sizeSqft: [],
      //   rent: [],
      //   deposit: [],
      //   leaseLength: [],
      //   availableDate: [],
      //   images: [],
      //   description: "",
      //   rentTitle: "",
      //   rentStartDate: "",
      //   rentEndDate: "",
      //   rentDescription: "",
      //   petsAllowed: "",
      //   laundryType: "",
      //   parkingType: "",
      //   amenities: "",
      //   userType: "",
      //   contactPreference: "",
      //   isHideName: false,
      //   user: "65072634a3cda33ef8d7bbc4",
      // },
      data: { ...ADVERTISE_INTIAL_STATE },
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
  },
});

export const {
  // Advertise
  onFormDirty,
  onFormAdvertiseDataChange,
} = mainViewSlice.actions;
export const mainViewState = (state) => state.mainView;

export default mainViewSlice.reducer;
