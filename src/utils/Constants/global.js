export const UNPROTECTED_PAGE = [
  {
    title: "RENTER TOOLS",
    path: "/",
    // icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "MANAGE RENTALS",
    path: "/reports",
    // icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
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
        title: "Property",
        path: "/",
      },

      {
        title: "Update Profiles",
        path: "/",
      },

      {
        title: "Add Another Property",
        path: "/",
      },

      {
        title: "Cancel Property",
        path: "/",
      },

      {
        title: "Reactive Property",
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
  petsAllowed: "",
  laundryType: "",
  parkingType: "",
  amenities: "",
  userType: "",
  contactPreference: "",
  isHideName: false,
  user: "",
};
