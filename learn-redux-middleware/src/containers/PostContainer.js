import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../modules/posts";
import Post from "../components/Post";
import { reducerUtils } from "../utils/asyncUtils";

function PostContainer({ id }) {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) =>
    state.posts.post[id] ? state.posts.post[id] : reducerUtils.initial()
  );
  useEffect(() => {
    if (data) return;
    dispatch(getPost(id));
  }, [dispatch, id, data]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러발생!</div>;
  if (!data) return null;
  return <Post post={data} />;
}

export default PostContainer;
