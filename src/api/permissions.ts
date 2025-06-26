import axios from "axios";
import {
  ADMIN_GET_AUTHPERMISSION_GROUP,
  ADMIN_GET_PERMISSION_GROUP,
  ADMIN_SET_PERMISSION_USER,
} from "./base";

export const admin_get_permission_groups = async (
  token: string | null,
  setdata: any,
  notify: any,
  setnot_found: any,
  setshowpreloader: any = null
) => {
  try {
    const response = await axios.post(
      ADMIN_GET_PERMISSION_GROUP,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.error == false) {
      setdata(response.data.auth_groups);
      if (response.data.auth_groups.length == 0) {
        setnot_found(true);
      }
    }

    if (setshowpreloader) {
      setshowpreloader(false);
    }
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    if (setshowpreloader) {
      setshowpreloader(false);
    }
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

export const get_admin_auth_group_permission = async (
  token: string | null,
  id: any,
  setdata: any,
  notify: any,
  setnot_found: any,
  setshowpreloader: any = null
) => {
  try {
    const response = await axios.post(
      ADMIN_GET_AUTHPERMISSION_GROUP,
      { auth_group_id: Number(id) },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.error == false) {
      setdata(response.data.permissions);
      if (response.data.permissions.length == 0) {
        setnot_found(true);
      }
    }
    if (setshowpreloader) {
      setshowpreloader(false);
    }

    console.log(response.data);
    return response.data;
  } catch (error: any) {
    if (setshowpreloader) {
      setshowpreloader(false);
    }
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

export const admin_set_permission = async (
  token: string | null,
  data: any,
  setactive: any,
  notify: any
) => {
  console.log(data);
  setactive(true);
  try {
    const response = await axios.post(ADMIN_SET_PERMISSION_USER, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.error == false) {
      // setdata(response.data.auth_groups);
      notify("User Permission Updated");
    }
    setactive(false);

    console.log(response.data);
    return response.data;
  } catch (error: any) {
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
