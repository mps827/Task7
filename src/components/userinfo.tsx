"use client";``

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";

const UserInfo: React.FC = () => {
  const phoneNumber = useSelector(
    (state: RootState) => state.auth.user.phoneNumber
  );
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.user.isLoggedIn
  );

  return (
    <div>
      {isLoggedIn ? (
        <p>User Phone Number: {phoneNumber}</p>
      ) : (
        <p>Please login {isLoggedIn}</p>
      )}
    </div>
  );
};

export default UserInfo;
