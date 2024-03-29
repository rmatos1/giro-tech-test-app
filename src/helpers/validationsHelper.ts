
import { MIN_PASSWORD_LENGTH } from "../constants";

export const validateEmail = (email: string) => {

  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return pattern.test(String(email).toLowerCase());
};

export const validatePassword = (password: string) => {
  return password.length >= MIN_PASSWORD_LENGTH;
}