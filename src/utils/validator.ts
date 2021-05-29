const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,3}$/i;

export const validateEmail = (email: string) => emailRegex.test(email);

export const validateIdFieldEmpty = (value: string) =>
  Boolean(`${value || ""}`.trim().length);

export const matchValue = (value1: string, value2: string) => value1 === value2;

export const validateStrongPassword = (password: string) =>
  `${password || ""}`.trim().length >= 6;
