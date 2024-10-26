export const API_END_POINT_SIGNIN = "http://localhost/auth-api/signin.php"; //localhost
export const API_END_POINT_SIGNUP = "http://localhost/auth-api/signup.php"; //localhost

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_END_POINT_SIGNIN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      return { success: true };
    } else {
      return {
        success: false,
        message: data.message || "Something went wrong",
      };
    }
  } catch (error) {
    // console.log(error, "error in auth");
    return { success: false, message: error.message };
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_END_POINT_SIGNUP}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      return { success: true };
    } else {
      return {
        success: false,
        message: data.message || "Something went wrong",
      };
    }
  } catch (error) {
    // console.log(error);
    return { success: false, message: error.message };
  }
};
