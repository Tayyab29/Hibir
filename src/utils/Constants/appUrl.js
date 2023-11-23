const appUrl = {
  genral: {
    countries: "genral/fetchCountry",
    zipCode: "genral/searchZipcode",
  },
  users: {
    login: "users/login",
    signup: "users/signup",
    userDetails: "users/get-user-details",
    userById: "users/get-user-id",
    updateUser: "users/edit-user",
    validateEmail: "users/getByEmail",
    forgetPassword: "users/resetpassword",
  },
  google: {
    login: "auth/google",
    signup: "auth/googleSignup",
  },
  advertise: {
    create: "advertise/create",
    edit: "advertise/editAdvertise",
    fileUpload: "advertise/upload",
    getAdvertise: "advertise/getAdvertisement",
    getAdvertiseById: "advertise/getAdvertiseById",
  },
  chat: {
    findChatById: "chat/getUserChatById",
  },
  message: {
    findMessageByChatId: "message/chatId",
    sendMessage: "message",
  },
};
export default appUrl;
