import React, { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
  user_id: null,
  name: null,
  email: null,
  roles: null,
  profile_photo: null,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        name: action.payload?.name,
        email: action.payload?.email,
      };

    case "SET_ID_TOKEN":
      return {
        ...state,
        id_token: action.payload,
      };

    case "SET_PROFILE_PHOTO":
      return {
        ...state,
        profile_photo: action.payload,
      };

    case "SET_LOGIN_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "SET_ROLES":
      return {
        ...state,
        roles: action.payload,
        // roles: ['stakeholder'],
      };

    case "SET_USER_ID":
      return {
        ...state,
        user_id: action.payload,
      };

    default:
      console.log("Incorrect action type");
    //   throw new Error();
  }
};

export const UserContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {props.children}
    </UserContext.Provider>
  );
};
