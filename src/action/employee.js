import http from "../http.js";
import notify from "../component/toaster/index";

export const getAllEmployee = async () => {
  try {
    const response = await http.get(`/employee`);
    return response;
  } catch (e) {
    notify(e.message);
    return null;
  }
};

export const updateEmployee = async (id, payload) => {
  try {
    const response = await http.patch(`/employee/${id}`, payload);
    return response;
  } catch (e) {
    notify(e.message);
    return null;
  }
};

export const createEmployee = async (payload) => {
  try {
    const response = await http.post(`/employee`, payload);
    notify("Employee created successfully ", "success");
    return response;
  } catch (e) {
    notify(e.message);
    return null;
  }
};
