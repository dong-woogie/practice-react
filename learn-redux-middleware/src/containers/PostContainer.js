import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../modules/posts";
import Post from "../components/Post";

function PostContainer({ id }) {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.posts.post);
  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러발생!</div>;
  if (!data) return null;
  return <Post post={data} />;
}

export default PostContainer;
