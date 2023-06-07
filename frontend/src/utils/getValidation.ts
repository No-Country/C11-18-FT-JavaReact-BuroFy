export type TypeWithKey<T> = { [key: string]: T };

export const getValidation = (errorCode: string) => {
  const codeMatcher: TypeWithKey<string> = {
    //backend errors
    ERR_409: "Hubo conflictos entre servidor y cliente, intente de nuevo.",
    ERR_500: "Hubo un error en el servidor, refresque e intente de nuevo.",
    ERR_401: "Intento realizar algo sin autorizacion, intente de nuevo.",
    //firebase errors
    "auth/wrong-password": "Typed the password incorrectly",
    "auth/too-many-requests": "You have tried several times try again later",
    "auth/user-not-found": "The user trying to log in is not found",
    "auth/email-already-exists": "The email address you entered is already registered",
    "auth/id-token-expired": "Your 'ID Token' has expired, log in again",
    "auth/internal-error":
      "The Authentication server encountered an unexpected error while trying to process the request",
    "auth/invalid-argument": "An invalid argument was provided to an Authentication method",
    "auth/invalid-credential":
      "The credential used to authenticate the Admin SDKs cannot be used to perform the desired action",
    "auth/invalid-display-name":
      "The provided value for the displayName user property is invalid. It must be a non-empty string",
    "auth/invalid-email":
      "The provided value for the email user property is invalid. It must be a string email address",
    "auth/invalid-id-token": "The provided ID token is not a valid Firebase ID token",
    "auth/invalid-password": "The provided value for the password user property is invalid",
  };

  return codeMatcher[errorCode];
};
