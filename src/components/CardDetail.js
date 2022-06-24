import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postIncrement, postDecrement } from "../Redux/action/action";
import Comment from "../Layout/Comment";

const CardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  const [comments, setComments] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePostDelete = (id) => {
    dispatch(postDecrement());
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (res.status === 200) {
          toast.error("Post deleted!", {
            theme: "colored",
          });
        }
      });
  };

  const handlePostUpdate = (e, id) => {
    e.preventDefault();
    const data = {
      userId: 1,
      id,
      title: post.title,
      body: post.body,
    };
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Post updated sucessfully!", {
            theme: "colored",
          });
        }
      })
      .catch((res) => console.log(res));
  };

  const handleAddPost = (e) => {
    dispatch(postIncrement());
    e.preventDefault();
    const data = {
      userId: 1,
      title: post.title,
      body: post.body,
    };
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, data)
      .then((res) => {
        if (res.status === 201) {
          toast.success("New post created sucessfully!", {
            theme: "colored",
          });
        }
      })
      .catch((res) => console.log(res));
  };

  const fetchPostComments = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => setComments(res?.data))
      .catch((res) => console.log(res));
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res?.data))
      .catch((res) => console.log(res));
    fetchPostComments();
  }, []);

  return (
    <div className="px-20">
      <form className=" space-y-8 divide-y divide-gray-200 md:w-3/5 sm:w-full">
        <div className="">
          <div className="flex justify-between mt-12">
            <div className="flex font-medium text-left items-center">
              <span onClick={() => navigate(-1)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="lightgrey"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                  />
                </svg>
              </span>
              <p className="font-semibold text-xl">Posts</p>
            </div>

            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleAddPost}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              New Post
            </button>
          </div>
          <div className=" sm:items-start sm:pt-5 ">
            <div className="mt-1 sm:mt-0 sm:col-span-2 ">
              <label
                for="about"
                className="block text-sm text-left font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                {" "}
                Title{" "}
              </label>
              <textarea
                id="about"
                name="title"
                rows="3"
                className=" shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                value={post.title}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className=" sm:items-start  sm:pt-5">
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <label
                  for="about"
                  className="block text-sm text-left font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  {" "}
                  Detail{" "}
                </label>
                <textarea
                  id="about"
                  name="body"
                  rows="7"
                  className=" shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                  value={post.body}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="pt-5">
              <div className="flex justify-end mt-10">
                <button
                  type="button"
                  className="flex bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium  hover:bg-red-700 bg-red-600 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => handlePostDelete(post.id)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                  Delete
                </button>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={(e) => handlePostUpdate(e, id)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                  </svg>
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
      <div className="mt-10">
        <h1 className="text-3xl text-left underline font-semibold">Comments</h1>
        {comments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CardDetail;
