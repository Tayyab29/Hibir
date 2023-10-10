import React, { createContext, useRef } from "react";
import { Toast } from "primereact/toast";
export const ToastContext = createContext();

export const ToastStateProvider = ({ children }) => {
  const toast = useRef(null);

  const createdToast = (title) => {
    toast.current.show({
      severity: "success",
      summary: `${toTitleCase(title)} Created.`,
      detail: `${title} has been created successfully.`,
      life: 5000000,
    });
  };

  const updateToast = (title) => {
    toast.current.show({
      severity: "success",
      summary: `${toTitleCase(title)} Updated.`,
      detail: `${title} has been updated successfully.`,
      life: 5000000,
    });
  };

  const assignmentToast = (title) => {
    toast.current.show({
      severity: "success",
      summary: `${toTitleCase(title)} Assigned.`,
      detail: `${title} has been assigned successfully.`,
      life: 5000000,
    });
  };

  const deleteToast = (title) => {
    toast.current.show({
      severity: "success",
      summary: `${toTitleCase(title)} Deleted.`,
      detail: `${title} has been deleted successfully.`,
      life: 5000000,
    });
  };

  const showMessage = (title, message, type) => {
    toast.current.show({ severity: type, summary: title, detail: message, life: 50000 });
  };

  function toTitleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  return (
    <ToastContext.Provider
      value={{
        createdToast,
        updateToast,
        deleteToast,
        showMessage,
        assignmentToast,
      }}
    >
      <Toast ref={toast} style={{ width: "390px" }} />
      {children}
    </ToastContext.Provider>
  );
};
