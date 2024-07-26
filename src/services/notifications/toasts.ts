import toast from "react-hot-toast";

export const notifySuccess = (message: string) => {
  toast.success(message, {
    style: {
      fontFamily: "Sora, sans serif",
      fontSize: "14px",
      border: "1px solid #41A152",
      padding: "10px 16px",
      color: "#41A152",
    },
    iconTheme: {
      primary: "#41A152",
      secondary: "#FFFAEE",
    },
  });
};

export const notifyError = (message: string) => {
  toast.success(message, {
    style: {
      fontFamily: "Sora, sans serif",
      fontSize: "14px",
      border: "1px solid #FF3A29",
      padding: "10px 16px",
      color: "#FF3A29",
    },
    iconTheme: {
      primary: "#FF3A29",
      secondary: "#FFFAEE",
    },
  });
};
