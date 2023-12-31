export const UNPROTECTED_PAGE = [
  {
    title: "RENTER TOOLS",
    path: "/",
    // icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  // {
  //   title: "MANAGE RENTALS",
  //   cName: "nav-text",
  //   path: "/",

  //   subMenu: [
  //     {
  //       title: "Properties",
  //       path: "/manageproperty",
  //     },

  //     {
  //       title: "Add Another Property",
  //       path: "/advertise",
  //     },

  //     {
  //       title: "Cancel Property",
  //       path: "/",
  //     },

  //     {
  //       title: "Reactivate Property",
  //       path: "/",
  //     },
  //   ],
  // },
  {
    title: "APARTMENTS",
    path: `/allproperties?type=ap`,
    // // icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "HOMES",
    path: "/allproperties?type=sh",
    // // icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "CONDOS",
    path: "/allproperties?type=con",
    // // icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "TOWNHOMES",
    path: "/allproperties?type=th",
    // // icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "MOBILE HOME",
    path: "/allproperties?type=mh",
    // icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  // {
  //   title: "ROOMS",
  //   path: "/reports",
  //   // icon: <IoIcons.IoIosPaper />,
  //   cName: "nav-text",
  // },
];

export const PROTECTED_PAGE = [
  {
    title: "RENTER TOOLS",
    path: "/",
    // icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "MANAGE RENTALS",
    cName: "nav-text",
    path: "/",

    subMenu: [
      {
        title: "Properties",
        path: "/manageproperty",
      },
      {
        title: "Add Another Property",
        path: "/advertise",
      },

      {
        title: "Cancel Property",
        path: "/",
      },

      {
        title: "Reactivate Property",
        path: "/",
      },
    ],
  },
  {
    title: "APARTMENTS",
    path: `/allproperties?type=ap`,
    // // icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "HOMES",
    path: "/allproperties?type=sh",
    // // icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "CONDOS",
    path: "/allproperties?type=con",
    // // icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "TOWNHOMES",
    path: "/allproperties?type=th",
    // // icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "MOBILE HOME",
    path: "/allproperties?type=mh",
    // icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  // {
  //   title: "ROOMS",
  //   path: "/reports",
  //   // icon: <IoIcons.IoIosPaper />,
  //   cName: "nav-text",
  // },
  {
    title: "INBOX",
    path: "/chatindex",
    // // icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "ACCOUNT",
    cName: "nav-text",
    path: "/accounts",
    subMenu: [
      {
        title: "My Account",
        path: "/accounts",
      },
      {
        title: "Billing History",
        path: "/billinghistory",
      },
      // {
      //   title: "Bank & Card",
      //   path: "/accounts",
      // },
    ],
  },
  {
    title: "FAVORITE",
    path: "/messages",
    // // icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "LAST SEEN",
    path: "/support",
    // // icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "SAVED",
    path: "/savedproperties",
    // // icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "CONTACTED",
    path: "/support",
    // // icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "NOTIFICATIONS",
    path: "/support",
    // // icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];

export const PROPERTY_TYPE = [
  { value: "", label: "Select a Property Type" },
  { value: "ap", label: "Apartment" },
  { value: "sh", label: "Single Family House" },
  { value: "con", label: "Condominium" },
  { value: "th", label: "TownHouse" },
  { value: "mh", label: "Mobile Home/Manufactured Home" },
];

// Advertise
export const ADVERTISE_INTIAL_STATE = {
  _id: "",
  isPackage: "",
  propertyUnit: "",
  propertyAdress: "",
  propertyType: "",
  propertyNames: [],
  propertyBeds: [],
  propertyBaths: [],
  sizeSqft: [],
  rent: [],
  deposit: [],
  leaseLength: [],
  availableDate: [],
  images: [],
  imagesLength: 0,
  description: "",
  rentTitle: "",
  rentStartDate: "",
  rentEndDate: "",
  rentDescription: "",
  utilities: [],
  petsAllowed: "",
  laundryType: "",
  parkingType: "",
  amenities: [],
  userType: "",
  contactPreference: "",
  isHideName: false,
  user: "",
};

export const ADVERTISE_UTILITIES = [
  { id: "1", label: "Gas" },
  { id: "2", label: "Water" },
  { id: "3", label: "Electricity" },
  { id: "4", label: "Heat" },
  { id: "5", label: "Trash Removal" },
  { id: "6", label: "Sewer" },
  { id: "7", label: "Cable" },
  { id: "8", label: "Air Condition" },
];

export const ADVERTISE_EMENTITIES = [
  { id: "1", label: "Furnished" },
  { id: "2", label: "WheelChair Accessible" },
  { id: "3", label: "Elevator" },
  { id: "4", label: "No Smoking" },
  { id: "5", label: "AC" },
  { id: "6", label: "Storage" },
  { id: "7", label: "Loft" },
  { id: "8", label: "Fitness Center" },
  { id: "9", label: "Fireplace " },
  { id: "10", label: "Gated Entry " },
  { id: "11", label: "Dishwasher " },
  { id: "12", label: "Swimming Pool" },
];

export const ADVERTISE_BATHS = [
  { value: "", label: "Select" },
  // { value: "0.5", label: "0.5" },
  { value: "1", label: "1" },
  // { value: "1.5", label: "1.5" },
  { value: "2", label: "2" },
  // { value: "2.5", label: "2.5" },
  { value: "3", label: "3" },
  // { value: "3.5", label: "3.5" },
  { value: "4", label: "4" },
  // { value: "4.5", label: "4.5" },
  { value: "5", label: "5" },
  // { value: "5.5", label: "5.5" },
  { value: "6", label: "6" },
  // { value: "6.5", label: "6.5" },
];

export const ADVERTISE_BEDS = [
  { value: "", label: "Select" },
  { value: "Studio", label: "Studio" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
];

export const ADVERTISE_PROPERTY_TYPE = [
  { value: "", label: "Select" },
  { value: "ap", label: "Apartment" },
  { value: "sh", label: "Single Family House" },
  { value: "con", label: "Condominium" },
  { value: "th", label: "TownHouse" },
  { value: "mh", label: "Mobile Home/Manufactured Home" },
];
export const FILTERBAR_PRICE = [
  { value: "", label: "Price" },
  { value: "ap", label: "$20" },
];
export const FILTERBAR_BEDS = [
  { value: "", label: "Beds" },
  { value: "ap", label: "$20" },
];
export const FILTERBAR_HOMETYPE = [
  { value: "", label: "Home Type" },
  { value: "ap", label: "Apartment" },
  { value: "sh", label: "Single Family House" },
  { value: "con", label: "Condominium" },
  { value: "th", label: "TownHouse" },
  { value: "mh", label: "Mobile Home/Manufactured Home" },
];
export const FILTERBAR_MOVEINDATE = [
  { value: "", label: "Move In Date" },
  { value: "ap", label: "$20" },
];
export const PARKING_TYPE = [
  { value: "", label: "Select" },
  { value: "1", label: "Covered" },
  { value: "2", label: "Street" },
  { value: "3", label: "Garage" },
  { value: "4", label: "Other" },
];
export const LAUNDRY_TYPE = [
  { value: "", label: "Select" },
  { value: "1", label: "Washer/Dryer - In Unit" },
  { value: "2", label: "Washer/Dryer Hookup" },
  { value: "3", label: "Laundry Facilities" },
];
export const PETS_TYPE = [
  { value: "", label: "Select" },
  { value: "Cats", label: "Cats" },
  { value: "Dogs", label: "Dogs" },
  { value: "None", label: "None" },
];

export const FILTER_PROPERTY_TYPE = [
  { value: "ap", label: "Apartment" },
  { value: "sh", label: "Single Family House" },
  { value: "con", label: "Condominium" },
  { value: "th", label: "TownHouse" },
  { value: "mh", label: "Mobile Home/Manufactured Home" },
];

export const FILTER_PROPERTY_AMENTITIES = [
  { name: "In Unit Washer & Dryer", count: 45 },
  { name: "Air Conditioning", count: 75 },
  { name: "Parking", count: 67 },
  { name: "Dishwasher", count: 77 },
  { name: "Furnished", count: 87 },
  { name: "In Unit Washer & Dryer", count: 45 },
  { name: "Air Conditioning", count: 75 },
  { name: "Parking", count: 67 },
  { name: "Dishwasher", count: 77 },
  { name: "Furnished", count: 87 },
];
