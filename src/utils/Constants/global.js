export const UNPROTECTED_PAGE = [
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
        path: "/managepropertyindex",
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
    path: "/products",
    // // icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "HOMES",
    path: "/team",
    // // icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "CONDOS",
    path: "/messages",
    // // icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "TOWNHOMES",
    path: "/support",
    // // icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "BASEMENT",
    path: "/",
    // icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "ROOMS",
    path: "/reports",
    // icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
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
        path: "/managepropertyindex",
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
    path: "/products",
    // // icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "HOMES",
    path: "/team",
    // // icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "CONDOS",
    path: "/messages",
    // // icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "TOWNHOMES",
    path: "/support",
    // // icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "BASEMENT",
    path: "/",
    // icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "ROOMS",
    path: "/reports",
    // icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "INBOX",
    path: "/products",
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
    path: "/support",
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

// Advertise
export const ADVERTISE_INTIAL_STATE = {
  isPackage: "",
  propertyUnit: "",
  propertyAdress: "",
  propertyType: "",
  propertyBeds: "",
  propertyBaths: "",
  sizeSqft: [],
  rent: [],
  deposit: [],
  leaseLength: [],
  availableDate: [],
  images: [],
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
