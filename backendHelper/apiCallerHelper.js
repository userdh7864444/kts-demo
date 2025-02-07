import { makeAPICall } from "../common";
import { POST_AUTH_LOGIN } from "./urlHelper";

export const postLogin = (data) =>
  makeAPICall({
    option: { method: "post", url: `${POST_AUTH_LOGIN}?remember-me=yes` },
    data,
  });
