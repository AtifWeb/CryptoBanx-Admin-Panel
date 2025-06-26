const ROOT_ADDRESS =
  "https://qlmmom3di6.execute-api.eu-west-3.amazonaws.com/Prod/";

export const USER_REGISTER = `${ROOT_ADDRESS}register/user`;
export const USER_LOGIN = `${ROOT_ADDRESS}login/user`;
export const USER_INSERT = `${ROOT_ADDRESS}user/insert-data`;
export const ACTIVE_TWO_FACTOR = `${ROOT_ADDRESS}two-factor/activate`;

export const SEND_TWO_FACTOR = `${ROOT_ADDRESS}two-factor/send-code`;
export const VERIFY_TWO_FACTOR = `${ROOT_ADDRESS}two-factor/verify`;

export const RESET_PASSWORD_GET = `${ROOT_ADDRESS}reset-password/get`;
export const RESET_PASSWORD_RESET = `${ROOT_ADDRESS}reset-password/reset`;

export const CREATE_PAYD_ACCOUNT = `${ROOT_ADDRESS}user/create-payd-account`;

export const GET_PAYD_ACCOUNT = `${ROOT_ADDRESS}user/get-payd-account`;

export const GET_USER_TRANSACTIONS = `${ROOT_ADDRESS}user/get-user-transactions`;

export const GET_USERS_FIAT = `${ROOT_ADDRESS}user/get_user_fiats`;

export const GET_NOTIFICATIONS = `${ROOT_ADDRESS}notification/get`;
export const READ_NOTIFICATIONS = `${ROOT_ADDRESS}notification/read`;

export const GET_CUSTOMERFEE_ADMIN = `${ROOT_ADDRESS}customer-fees/get`;
export const UPDATE_CUSTOMERFEE_ADMIN = `${ROOT_ADDRESS}customer-fees/update`;

// Admin
export const ADMIN_GET_USERS = `${ROOT_ADDRESS}admin/get-users`;
export const ADMIN_VALIDATE_USER = `${ROOT_ADDRESS}admin/validate-user`;
export const ADMIN_GET_VALIDATE_USERS = `${ROOT_ADDRESS}admin/get-validation-users`;
export const ADMIN_GET_USER_TRANSACTIONS = `${ROOT_ADDRESS}admin/get-users-transactions`;
export const ADMIN_GET_USER_DETAILS = `${ROOT_ADDRESS}admin/get-user-detail`;
export const ADMIN_LOCK_STATE_USER = `${ROOT_ADDRESS}admin/change-user-lock-state`;
export const ADMIN_BAN_STATE_USER = `${ROOT_ADDRESS}admin/change-user-ban-state`;

// Fiats
export const ADMIN_GET_FIATS = `${ROOT_ADDRESS}fiats/specific-user-fiat`;
export const ADMIN_GET_USER_PAYD_ACCOUNT = `${ROOT_ADDRESS}fiats/get-specific-payd-account`;

// Affiliate
export const GET_AFFILIATE_USERS = `${ROOT_ADDRESS}affiliate/get-users`;
export const CHANGE_STATE_AFFILIATE_USER = `${ROOT_ADDRESS}affiliate/change-state`;
export const GET_AFFILIATE_EARNING_USER = `${ROOT_ADDRESS}affiliate/admin-get-earning`;

// Requests
export const GET_USER_REQUEST = `${ROOT_ADDRESS}user-request/all`;
export const GET_SPEC_USER_REQUEST = `${ROOT_ADDRESS}user-request/admin`;
export const RESPONSE_USER_REQUEST = `${ROOT_ADDRESS}user-request/response`;

// logs
export const ADMIN_USER_LOGIN_LOGS = `${ROOT_ADDRESS}login-logs/all`;
export const ADMIN_USERADMIN_LOGIN_LOGS = `${ROOT_ADDRESS}login-logs/admin-logs`;
export const ADMIN_GET_USER_LOGS = `${ROOT_ADDRESS}login-logs/admin`;

// transactions
export const ADMIN_USER_GET_TRANSACTION = `${ROOT_ADDRESS}admin/get-users-transactions`;

// search user
export const ADMIN_SEARCH_USER = `${ROOT_ADDRESS}admin/search-user`;
export const ADMIN_SEARCH_USER_REQUEST = `${ROOT_ADDRESS}user-request/search`;

// permission
export const ADMIN_GET_PERMISSION_GROUP = `${ROOT_ADDRESS}permission/groups`;
export const ADMIN_SET_PERMISSION_USER = `${ROOT_ADDRESS}permission/set-user`;
export const ADMIN_GET_AUTHPERMISSION_GROUP = `${ROOT_ADDRESS}permission/get-admin`;

// bank accounts
export const ADMIN_GET_USER_ACCOUNT_FIATS = `${ROOT_ADDRESS}fiats/get-specific-payd-account`;

// validation user
export const ADMIN_GET_VALIDATION_USER = `${ROOT_ADDRESS}admin/get-validation-users`;
