import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ posts }) => {
  const navigate = useNavigate();
  const handleRedirectPost = (id) => {
    navigate(`/post/${id}`);
  };
  return (
    <>
      <div className="mt-12 max-w-lg  lg:max-w-none w-80 font-semibold bg-white  rounded-lg shadow-lg hover:cursor-pointer hover:border-blue-400 border-4">
        <div
          onClick={() => handleRedirectPost(posts.id)}
          className="overflow-hidden flex-1  p-6 flex flex-col "
        >
          <p className="text-xl text-left  text-gray-900">{posts.title}</p>
          <p className="mt-3 text-left text-base text-gray-500">{posts.body}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
