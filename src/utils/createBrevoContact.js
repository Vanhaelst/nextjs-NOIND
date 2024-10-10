import apiCall from "./apiCall";

export const createBrevoContact = ({ onSuccess, onError, data = {} }) =>
  apiCall("https://api.sendinblue.com/v3/contacts/doubleOptinConfirmation", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": process.env.NEXT_PUBLIC_SENDINBLUE_API_KEY || "xkeysib-",
    },
    data: {
      email: data.email,
      attributes: {
        OPT_IN_NOIND: true,
        COUNTRIES: ["Belgium"],
      },
      emailBlacklisted: false,
      smsBlacklisted: false,
      includeListIds: [7],
      templateId: 3,
      redirectionUrl: "https://www.noind.be/",
      updateEnabled: true,
    },
    onSuccess: (response) => {
      if (onSuccess) {
        return onSuccess(response);
      }
      return response;
    },
    onError: (error) => {
      if (onError) {
        onError(error);
      }
      throw error;
    },
  });

export default createBrevoContact;
