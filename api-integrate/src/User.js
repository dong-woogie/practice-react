import React, { useEffect } from "react";
import { getUser, useUsersDispatch, useUsersState } from "./UserContext";

function User({ id }) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  useEffect(() => {
    getUser(dispatch, id);
  }, [id, dispatch]);

  const { loading, data: user, error } = state.user;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러발생에러발생</div>;
  if (!user) return null;
  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email : </b> {user.email}
      </p>
    </div>
  );
}

export default User;
