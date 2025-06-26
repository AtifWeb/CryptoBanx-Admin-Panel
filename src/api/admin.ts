import axios from "axios";
import {
  ADMIN_BAN_STATE_USER,
  ADMIN_GET_FIATS,
  ADMIN_GET_USER_ACCOUNT_FIATS,
  ADMIN_GET_USER_DETAILS,
  ADMIN_GET_USER_LOGS,
  ADMIN_GET_USER_PAYD_ACCOUNT,
  ADMIN_GET_USER_TRANSACTIONS,
  ADMIN_GET_USERS,
  ADMIN_GET_VALIDATE_USERS,
  ADMIN_GET_VALIDATION_USER,
  ADMIN_LOCK_STATE_USER,
  ADMIN_SEARCH_USER,
  ADMIN_SEARCH_USER_REQUEST,
  ADMIN_USER_GET_TRANSACTION,
  ADMIN_USER_LOGIN_LOGS,
  ADMIN_USERADMIN_LOGIN_LOGS,
  ADMIN_VALIDATE_USER,
  GET_CUSTOMERFEE_ADMIN,
  GET_SPEC_USER_REQUEST,
  GET_USER_REQUEST,
  RESPONSE_USER_REQUEST,
  UPDATE_CUSTOMERFEE_ADMIN,
} from "./base";

// Helper function to convert snake_case to PascalCase
const formatKey = (key: string): string => {
  return key
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const get_customerfee_admin = async (
  data: any,
  token: string | null,
  setfees: Function,
  notify: any,
  not_found: any,
  setshowpreloader: any = null
) => {
  console.log(token);
  try {
    const response = await axios.post(GET_CUSTOMERFEE_ADMIN, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.error == false) {
      setfees(response.data.customer_fees);
      if (response.data.customer_fees.length == 0) {
        not_found(true);
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

export const update_customerfee_admin = async (
  data: any,
  token: string | null,
  setactive: Function,
  setsetfees: Function,
  setaddfee: Function,
  notify: any
) => {
  setactive(true);
  try {
    const response = await axios.post(UPDATE_CUSTOMERFEE_ADMIN, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.error == false) {
      setsetfees(response.data.customer_fees);
      notify("Operation fee has been saved successfully.");
    }
    setaddfee(false);
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

export const get_all_users = async (
  token: string | null,
  setdata: Function,
  notify: any,
  setshowpreloader: any
) => {
  setshowpreloader(true);
  try {
    const response = await axios.post(
      ADMIN_GET_USERS,
      {
        get_users_from_index: 0,
        get_users_to_index: 100,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.error == false) {
      setdata(response.data.users);
    }
    setshowpreloader(false);

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

export const validate_user = async (
  data: any,
  token: string | null,
  setischecked: Function,
  setactive: Function,
  notify: any
) => {
  setactive(true);
  try {
    const response = await axios.post(ADMIN_VALIDATE_USER, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.error == false) {
      setischecked(true);
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

export const get_non_validated_user = async (
  token: string | null,
  setdata: Function,
  notify: any
) => {
  try {
    const response = await axios.post(
      ADMIN_GET_VALIDATE_USERS,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.error == false) {
      setdata(response.data.users);
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

export const get_transactions = async (
  token: string | null,
  setdata: Function,
  notify: any
) => {
  try {
    const response = await axios.post(
      ADMIN_GET_USER_TRANSACTIONS,
      {
        get_users_transaction_transaction_limit: 40,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.error == false) {
      setdata(response.data.transactions);
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

export const get_users_requests = async (
  token: string | null,
  setdata: Function,
  notify: any,
  setnot_found: any,
  setshowpreloader: any
) => {
  try {
    const response = await axios.post(
      GET_USER_REQUEST,
      {
        request_from_index: 0,
        request_to_index: 100,
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
      setdata(response.data.all_user_requests);

      if (response.data.all_user_requests.length == 0) {
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

export const get_spec_user_request = async (
  token: string | null,
  userid: any,
  setdata: Function,
  notify: any,
  setshowpreloader: any = null
) => {
  try {
    const response = await axios.post(
      GET_SPEC_USER_REQUEST,
      {
        request_user_id: userid,
        request_from_index: 0,
        request_to_index: 100,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.error == false) {
      setdata(response.data.user_requests);
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

export const get_user_details = async (
  token: string | null,
  userid: string | number,
  setdata: (data: Record<string, any>) => void,
  notify: any,
  setshowpreloader: any
): Promise<any> => {
  try {
    const response = await axios.post(
      ADMIN_GET_USER_DETAILS,
      {
        get_user_detail_user_id: userid,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.error === false) {
      const rawData: Record<string, any> = response.data.user_detail;
      const formattedData: Record<string, any> = {};

      Object.entries(rawData).forEach(([key, value]) => {
        const newKey = formatKey(key);
        formattedData[newKey] = value;
      });

      setdata(formattedData);

      console.log(formattedData);
    }
    setshowpreloader(false);
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

export const response_user_from_admin = async (
  token: string | null,
  data: any,
  setactive: any,
  notify: any
): Promise<any> => {
  try {
    setactive(`${data.requestId}-${data.response == 2 ? "true" : "false"}`);
    console.log(data);
    const response = await axios.post(
      RESPONSE_USER_REQUEST,
      {
        response_user_request_id: data.requestId,
        response_user_request_response_status: data.response,
        response_user_request_bank_api_type: data.bank_api_type,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.error === false) {
      setTimeout(() => {
        window.location.reload();
      }, 500);
      notify(response.data.result);
    }

    setactive(null);
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    setactive(null);

    const errorMessage =
      error?.response?.data?.message || error?.message || String(error);

    notify(errorMessage);

    if (error.response.status === 401 || error.response.status === 403) {
      window.location.href = "/";
      window.sessionStorage.removeItem("token");
      window.sessionStorage.removeItem("data");
    }
  }
};

export const admin_user_login_logs = async (
  token: string | null,
  setdata: any,
  notify: any,
  setnot_found: any,
  setshowpreloader: any
): Promise<any> => {
  try {
    const response = await axios.post(
      ADMIN_USER_LOGIN_LOGS,
      {
        get_all_user_login_logs_limit: 20,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setshowpreloader(false);
    if (response.data.error === false) {
      setdata(response.data.login_logs);
      if (response.data.login_logs.length == 0) {
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

export const get_admin_user_logs = async (
  token: string | null,
  setdata: any,
  id: any,
  notify: any
): Promise<any> => {
  try {
    const response = await axios.post(
      ADMIN_GET_USER_LOGS,
      {
        get_user_login_logs_user_id: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.error === false) {
      setdata(response.data.login_logs);
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

export const get_adminuser_logs = async (
  token: string | null,
  setdata: any,
  notify: any,
  setnot_found: any,
  setshowpreloader: any
): Promise<any> => {
  try {
    const response = await axios.post(
      ADMIN_USERADMIN_LOGIN_LOGS,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setshowpreloader(false);
    if (response.data.error === false) {
      setdata(response.data.login_logs);
      if (response.data.login_logs.length == 0) {
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

export const get_users_transactions = async (
  token: string | null,
  settransactions: Function,
  notify: any,
  setnot_found: any,
  setshowpreloader: any
) => {
  try {
    const response = await axios.post(
      ADMIN_USER_GET_TRANSACTION,
      {
        get_users_transaction_transaction_limit: 20,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.data.error == false) {
      settransactions(response.data.transactions);

      if (response.data.transactions.length == 0) {
        setnot_found(true);
      }
    }
    setshowpreloader(false);
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

export const get_users_transactions_detail = async (
  token: string | null,
  settransactions: Function,
  notify: any
) => {
  try {
    const response = await axios.post(
      ADMIN_USER_GET_TRANSACTION,
      {
        get_users_transaction_transaction_limit: 20,
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

export const lock_state_user = async (
  data: any,
  token: string | null,
  setischecked: Function,
  setactive: Function,
  notify: any
) => {
  setactive(true);
  try {
    const response = await axios.post(ADMIN_LOCK_STATE_USER, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.error == false) {
      setischecked(data.change_user_lock_state_locked);
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

export const ban_state_user = async (
  data: any,
  token: string | null,
  setischecked: Function,
  setactive: Function,
  notify: any
) => {
  setactive(true);
  try {
    const response = await axios.post(ADMIN_BAN_STATE_USER, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.error == false) {
      setischecked(data.change_user_ban_state_banned);
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

export const admin_search_user = async (
  token: string | null,
  data: any,
  setuser: any,
  setactive: Function,
  notify: any
) => {
  setactive(true);
  console.log(data);
  try {
    const response = await axios.post(ADMIN_SEARCH_USER, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.error == false) {
      setuser(response.data.user);
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

export const admin_search_user_request = async (
  token: string | null,
  data: any,
  setuser: any,
  setactive: Function,
  notify: any
) => {
  setactive(true);
  console.log(data);
  try {
    const response = await axios.post(ADMIN_SEARCH_USER_REQUEST, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.error == false) {
      setuser(response.data.user_requests);
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

export const get_admin_user_fiats = async (
  token: string | null,
  id: any,
  setdata: any,
  notify: any
) => {
  try {
    const response = await axios.post(
      ADMIN_GET_USER_ACCOUNT_FIATS,
      {
        get_payd_accounts_user_id: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.error == false) {
      setdata(response.data.accounts);
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

export const get_admin_validation_user = async (
  token: string | null,
  setdata: any,
  notify: any,
  setshowpreloader: any
) => {
  try {
    const response = await axios.post(
      ADMIN_GET_VALIDATION_USER,
      {
        get_validation_users_from_index: 0,
        get_validation_users_to_index: 100,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.error == false) {
      setdata(response.data.users);
    }
    setshowpreloader(false);
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

export const get_user_fiats = async (
  token: string | null,
  setdata: any,
  notify: any,
  data: any
) => {
  try {
    const response = await axios.post(ADMIN_GET_FIATS, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.error == false) {
      setdata(response.data.fiats);
    }

    console.log(response.data.fiats);
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

export const get_user_payd_accounts = async (
  token: string | null,
  setdata: any,
  notify: any,
  data: any
) => {
  try {
    const response = await axios.post(ADMIN_GET_USER_PAYD_ACCOUNT, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.error == false) {
      setdata(response.data.accounts);
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
