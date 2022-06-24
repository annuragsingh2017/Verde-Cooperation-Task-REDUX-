import React from "react";

const Comment = ({ comment }) => {
  return (
    <div>
      <div>
        <ul role="list" class="divide-y divide-gray-200">
          <li class="py-4">
            <div class="flex space-x-3">
              <div class="flex-1 space-y-1 text-left">
                <p class="text-xl font-semibold">{comment.name}</p>
                <p className="italic text-sm">{comment.email}</p>
                <p class="text-sm text-gray-500">{comment.body}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Comment;
