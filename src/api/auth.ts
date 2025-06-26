import axios from "axios";
import {
  USER_INSERT,
  USER_REGISTER,
  ACTIVE_TWO_FACTOR,
  USER_LOGIN,
  SEND_TWO_FACTOR,
  VERIFY_TWO_FACTOR,
  RESET_PASSWORD_GET,
  RESET_PASSWORD_RESET,
} from "./base";

export const registerUser = async (
  email: string,
  password: string,
  clienttype: string,
  setactive: any,
  setapierror: any,
  settwofa: any
) => {
  try {
    const response = await axios.post(
      USER_REGISTER,
      {
        email,
        password,
        client_type: Number(clienttype),
        tenant_id: "cbx-tt-1000001",
        admin_user_id: "cbx-us-1000001",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        // Optional: add timeout or withCredentials if needed
      }
    );
    settwofa(true);
    setactive(false);
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    setactive(false);
    setapierror(true);

    if (error.response.status === 401 || error.response.status === 403) {
      window.location.href = "/";
      window.sessionStorage.removeItem("token");
      window.sessionStorage.removeItem("data");
    }
  }
};

export const loginUser = async (
  email: string,
  password: string,
  setactive: any,
  setsteps: any,
  setdata: any,
  setapierror: any,
  setgooglAuth: any,
  settwofa: any,
  tenant_id: any,
  router: any,
  notify: any
) => {
  try {
    const response = await axios.post(
      USER_LOGIN,
      {
        email,
        password,
        tenant_id: tenant_id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        // Optional: add timeout or withCredentials if needed
      }
    );

    setactive(false);

    const token = response.data.token;
    const data = response.data.data;

    setdata(response.data.data);
    if (token) {
      if (response.data.data.is_admin) {
        window.sessionStorage.setItem("token", token);
        window.sessionStorage.setItem("data", JSON.stringify(data));
        router.push("/users");
      }

      // if (response.data.data.two_factor_type.mail.activated == true) {
      //   settwofa(true);

      //   send_twofa_code(
      //     {
      //       two_factor_type: "mail",
      //       user_type: "user",
      //     },
      //     window.sessionStorage.getItem("token"),
      //     settwofa,
      //     () => {},
      //     setactive
      //   );
      // }

      if (response.data.data.two_factor_type.app.activated == true) {
        setgooglAuth(true);
      }
    }
    return response.data;
  } catch (error: any) {
    setapierror(true);
    setactive(false);

    if (error.response && error.response.data && error.response.data.message) {
      if (error.response.status === 401 || error.response.status === 403) {
        notify("Your session is expired");
        setTimeout(() => {
          window.location.href = "/";
          window.sessionStorage.removeItem("token");
          window.sessionStorage.removeItem("data");
        }, 2000);
      } else {
        notify(error.response.data.message);
      }
    } else {
      console.log(error.message || error);
    }
  }
};

export const insertUserData = async (
  data: any,
  token: string | null,
  notify: any
) => {
  console.log(token);
  try {
    const response = await axios.post(USER_INSERT, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data);

    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      if (error.response.status === 401 || error.response.status === 403) {
        notify("Your session is expired");
        setTimeout(() => {
          window.location.href = "/";
          window.sessionStorage.removeItem("token");
          window.sessionStorage.removeItem("data");
        }, 2000);
      } else {
        notify(error.response.data.message);
      }
    } else {
      console.log(error.message || error);
    }
  }
};

export const Activate2fa = async (
  data: any,
  token: string | null,
  settwofa: any,
  setactive: any,
  notify: any
) => {
  setactive(true);
  try {
    const response = await axios.post(ACTIVE_TWO_FACTOR, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);

    window.sessionStorage.setItem("token", response.data.token);
    window.sessionStorage.setItem("data", JSON.stringify(response.data.data));

    if (response.data.error == false) {
      settwofa(false);
      setactive(false);
      notify("Verify Activated Successfully");
    }

    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      if (error.response.status === 401 || error.response.status === 403) {
        notify("Your session is expired");
        setTimeout(() => {
          window.location.href = "/";
          window.sessionStorage.removeItem("token");
          window.sessionStorage.removeItem("data");
        }, 2000);
      } else {
        notify(error.response.data.message);
      }
    } else {
      console.log(error.message || error);
    }
  }
};

export const verify_twofa_code = async (
  data: any,
  token: string | null,
  settwofa: any,
  setgooglAuth: any,
  notify: any
) => {
  try {
    const response = await axios.post(VERIFY_TWO_FACTOR, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    if (response.data.error == false) {
      setgooglAuth(false);
      settwofa(false);
    }

    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      if (error.response.status === 401 || error.response.status === 403) {
        notify("Your session is expired");
        setTimeout(() => {
          window.location.href = "/";
          window.sessionStorage.removeItem("token");
          window.sessionStorage.removeItem("data");
        }, 2000);
      } else {
        notify(error.response.data.message);
      }
    } else {
      console.log(error.message || error);
    }
  }
};

export const send_twofa_code = async (
  data: any,
  token: string | null,
  settwofa: any,
  setverify: any,
  setactive: any,
  setUri?: Function
) => {
  console.log(data);
  setactive(true);
  try {
    const response = await axios.post(SEND_TWO_FACTOR, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    if (response.data.error == false) {
      settwofa(true);
      setverify(false);
      setactive(false);
      if (setUri) {
        setUri(response.data.provisioning_uri);
      }
    }

    return response.data;
  } catch (error: any) {
    if (error.response.status === 401 || error.response.status === 403) {
      window.location.href = "/";
      window.sessionStorage.removeItem("token");
      window.sessionStorage.removeItem("data");
    }
    console.error(error);
  }
};

export const get_forget_password = async (
  data: any,
  token: string | null,
  setactive: Function,
  notify: Function
) => {
  console.log(data);
  setactive(true);
  try {
    const response = await axios.post(RESET_PASSWORD_GET, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.error == false) {
      notify(response.data.result);
      setactive(false);
    }
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      if (error.response.status === 401 || error.response.status === 403) {
        notify("Your session is expired");
        setTimeout(() => {
          window.location.href = "/";
          window.sessionStorage.removeItem("token");
          window.sessionStorage.removeItem("data");
        }, 2000);
      } else {
        notify(error.response.data.message);
      }
    } else {
      console.log(error.message || error);
    }
  }
};

export const forget_password = async (
  data: any,
  token: string | null,
  setactive: Function,
  notify: Function
) => {
  setactive(true);
  try {
    const response = await axios.post(RESET_PASSWORD_RESET, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.error == false) {
      notify(response.data.result);
      setactive(false);
    }
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      if (error.response.status === 401 || error.response.status === 403) {
        notify("Your session is expired");
        setTimeout(() => {
          window.location.href = "/";
          window.sessionStorage.removeItem("token");
          window.sessionStorage.removeItem("data");
        }, 2000);
      } else {
        notify(error.response.data.message);
      }
    } else {
      console.log(error.message || error);
    }
  }
};
