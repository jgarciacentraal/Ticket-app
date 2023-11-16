const response = {
  token: "4353453",
  path: "dashboard",
  status: 200,
};
const error = {
  status: "422",
  message: "Invalid credentials",
};
export const authPromise = (body) => {
  if (body.email === "julio" && body.password === "12345") {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ response });
      }, 300);
    });
  } else {
    return new Promise((resolve, reject) => {
      reject(error);
    });
  }
};

export const loadDashboard = ({ history, response }) => {
  history.push(response.path);
};
