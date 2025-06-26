import axios from "axios";
import {
  CHANGE_STATE_AFFILIATE_USER,
  GET_AFFILIATE_EARNING_USER,
  GET_AFFILIATE_USERS,
} from "./base";

export const get_affiliate_users = async (
  token: string | null,
  setdata: Function,
  notify: any,
  setnot_found: any,
  setshowpreloader: any
) => {
  try {
    const response = await axios.post(
      GET_AFFILIATE_USERS,
      {
        get_affiliate_users_from_index: 0,
        get_affiliate_users_to_index: 100,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setshowpreloader(false);
    if (response.data.error == false) {
      setdata(response.data.affiliate_users);

      if (response.data.affiliate_users.length == 0) {
        setnot_found(true);
      }
    }

    console.log(response.data);
    return response.data;
  } catch (error: any) {
    setshowpreloader(false);
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

export const affiliate_user = async (
  data: any,
  token: string | null,
  setischecked: Function,
  setactive: Function,
  notify: any
) => {
  setactive(true);
  try {
    const response = await axios.post(CHANGE_STATE_AFFILIATE_USER, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.error == false) {
      setischecked(data.change_user_affiliate_state_activate);
    }
    setactive(false);
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    setactive(false);
    if (error.response && error.response.data && error.response.data.message) {
      notify(error.response.data.message);

      if (error.response.status === 401 || error.response.status === 403) {
        setTimeout(() => {
          window.location.href = "/";
          window.sessionStorage.removeItem("token");
          window.sessionStorage.removeItem("data");
        }, 2000);
      }
    } else {
      console.log(error.message || error);
    }
  }
};

export const get_affiliate_earning = async (
  data: any,
  token: string | null,
  setearnings: any,
  notify: any,
  setnot_found: any,
  setshowpreloader: any
) => {
  try {
    const response = await axios.post(GET_AFFILIATE_EARNING_USER, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    setshowpreloader(false);
    if (response.data.error == false) {
      setearnings(response.data.result.earnings);
      if (response.data.result.earnings.length == 0) {
        setnot_found(true);
      }
    }

    console.log(response.data);
    return response.data;
  } catch (error: any) {
    setnot_found(true);
    setshowpreloader(false);
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
