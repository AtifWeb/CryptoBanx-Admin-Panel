import axios from "axios";
import {
  CREATE_PAYD_ACCOUNT,
  GET_NOTIFICATIONS,
  GET_PAYD_ACCOUNT,
  GET_USER_TRANSACTIONS,
  GET_USERS_FIAT,
  READ_NOTIFICATIONS,
} from "./base";

export const create_payd_account = async (
  data: any,
  token: string | null,
  setactive: Function,
  setcreate_account: Function,
  notify: any
) => {
  setactive(true);
  try {
    const response = await axios.post(CREATE_PAYD_ACCOUNT, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.error == false) {
      setactive(false);
      setcreate_account(false);
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

export const get_payd_account = async (
  token: string | null,
  setaccounts: Function,
  notify: any
) => {
  try {
    const response = await axios.post(
      GET_PAYD_ACCOUNT,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.data["accounts"]) {
      setaccounts(response.data["accounts"]);
    }
    console.log(response.data["accounts"]);
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

export const get_users_transactions = async (
  token: string | null,
  settransactions: Function,
  notify: any
) => {
  try {
    const response = await axios.post(
      GET_USER_TRANSACTIONS,
      {
        transaction_limit: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.data.error == false) {
      settransactions(response.data.transactions);
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

export const get_users_fiat = async (
  token: string | null,
  setfiat: Function,
  notify: any
) => {
  try {
    const response = await axios.post(
      GET_USERS_FIAT,
      {
        from_date: "04-03-2025",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.data.error == false) {
      setfiat(response.data.fiats);
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

export const get_notifications = async (
  token: string | null,
  setdata: Function,
  notify: any
) => {
  try {
    const response = await axios.post(
      GET_NOTIFICATIONS,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.data.error == false) {
      setdata(response.data.notifications);
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

export const read_notifications = async (
  token: string | null,
  list: any,
  notify: any
) => {
  try {
    const response = await axios.post(
      READ_NOTIFICATIONS,
      {
        notification_list: list,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

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
