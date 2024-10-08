export const appUrls = {
    //AUTH ENDPOINTS
    REGISTER_URL: "/auth/seller/join",
    LOGIN_URL: "/auth/signin",
    FORGOT_PASSWORD_URL: "/auth/forgot-password",
    RESET_PASSWORD_URL: "/auth/reset-password",
    EMAIL_VERIFICATION_URL: "/auth/verification",
    RESEND_VERIFICATION_URL: "/auth/resend-verification-code",

    //PRODUCT ENDPOINTS
    CREATE_PRODUCTS_URL: "/product/create",
    FETCH_PRODUCTS_CATEGORIES_URL: "/category",
    FETCH_PRODUCTS_URL: "/product/my/store",  // /my-product
    DELIST_PRODUCTS_URL: "/product/delist",
    DELETE_PRODUCTS_URL: "/product/delete",
    EDIT_PRODUCTS_URL: "/product/update",
    EDIT_PRODUCTS_IMAGE_URL: "/product/update/images",
    EDIT_PRODUCTS_THUMBNAIL_URL: "/product/update/thumbnail",

    //PROFILE ENDPOINTS
    FETCH_USER_PROFILE_URL: "/user/profile",
    UPDATE_PASSWORD_URL: "/user/change-password",
    CLOSE_STORE_URL: "/user/store/close",
    OPEN_STORE_URL: "/user/store/open",

    //ORDERS ENDPOINT
    FETCH_ORDERS_URL: "/orders",
    FETCH_PURCHASED_ITEMS_URL: "/purchase/items",

    // TRANSACTION ENDPOINT
    TRANSACTION_URL: "/transactions/user",

    //ANALYTICS ENDPOINT
    FETCH_ANALYTICS_URL: "/analytics/seller",

    //GRAPH ENDPOINT
    FETCH_GRAPH_URL: "/analytics/total/category/sale",

    //BANK ENDPOINT
    ADD_BANK_URL: "/user/update/bank-details"
    

};
