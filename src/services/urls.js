export const appUrls = {
    //AUTH ENDPOINTS
    REGISTER_URL: "/auth/seller/join",
    LOGIN_URL: "/auth/signin",
    EMAIL_VERIFICATION_URL: "/auth/verification",
    RESEND_VERIFICATION_URL: "/auth/resend-verification-code",

    //PRODUCT ENDPOINTS
    CREATE_PRODUCTS_URL: "/product/create",
    FETCH_PRODUCTS_CATEGORIES_URL: "/category",
    FETCH_PRODUCTS_URL: "/product",  // /my-product
    DELIST_PRODUCTS_URL: "/product/delist",

    //PROFILE ENDPOINTS
    FETCH_USER_PROFILE_URL: "/user/profile",
    UPDATE_PASSWORD_URL: "/user/change-password",
    CLOSE_STORE_URL: "/user/store/close",
    OPEN_STORE_URL: "/user/store/open",

    //ORDERS ENDPOINT
    FETCH_ORDERS_URL: "/orders",

    // TRANSACTION ENDPOINT
    TRANSACTION_URL: "/transactions/user",

    //ANALYTICS ENDPOINT
    FETCH_ANALYTICS_URL: "/analytics/seller"
    

};
