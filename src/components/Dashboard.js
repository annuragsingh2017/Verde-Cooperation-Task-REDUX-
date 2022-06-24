import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Layout/Card";
import { fetchPostData } from "../Redux/action/action";

const Dashboard = () => {
  const dispatch = useDispatch();
  const postDataList = useSelector((state) => state?.post?.data);
  useEffect(() => {
    dispatch(fetchPostData());
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-evenly">
        {postDataList.map((post, index) => (
          <Card key={index} posts={post} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
