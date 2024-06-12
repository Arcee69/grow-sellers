import { appUrls } from "../services/urls";

export function isObjectEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}


// export function convertDateTimeStamp(dateData) {
//     const date = new Date(dateData);
//     const year = date.getFullYear();
//     const month = date.getMonth() + 1;
//     const day = date.getDate();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();
//     const result = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
//     return result
// }

export function convertCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const result = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    return `startDate=${result}`
}

export function debounce(func) {
    let timer;
    return function (...args) {
        const context = this;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            func.apply(context, args);
        }, 800);
    };
};

export const uploadImageToS3Bucket = async (file) => {
    let formData = new FormData();
    formData.append("file", file);
    const response = await api.post(appUrls.S3BUCKETUPLOAD_URL, formData)
    return response;
};

export const selectStyles = {
    control: (styles) => ({
        ...styles,
        backgroundColor: "#FFF6DC",
        minHeight: 56,
        borderColor: "#FCB900",
        boxShadow: "none",
        "&:hover": {
            borderColor: "#FCB900",
            outlineColor: "#FCB900"
        }
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
            ...styles,
            backgroundColor: isFocused ? "#FCB900" : "#FFF",
            color: isFocused ? "#FFF" : "#000",
            cursor: isDisabled ? "not-allowed" : "default",
        };
    },
}

// export function checkObjectProperties(obj) {
//     const requiredProperties = [
//         "phone",
//         "email",
//         "lastName",
//         "firstName",
//         "lastLogin",
//         "tokenExpiry",
//         "userId",
//         "clientId",
//         "referralCode",
//         "isEmailVerified",
//         "isActive"
//     ];
//     for (let i = 0; i < requiredProperties.length; i++) {
//         if (!(requiredProperties[i] in obj)) {
//             return false;
//         }
//     }
//     return true;
// }
