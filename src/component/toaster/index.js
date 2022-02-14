import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const toastConfigObject = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
};

toast.configure(toastConfigObject);

const notify = (msg, type = "error", id = 1) =>
  toast(msg, { className: type, toastId: id });

export default notify;
