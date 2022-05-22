import React from "react";
import { FaRegComment, FaRegHeart, FaStar } from "react-icons/fa";

const UserReview = () => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-6 h-full mx-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-8 rounded-full ring ring-primary ">
              <img src="https://api.lorem.space/image/face?hash=3174" alt="" />
            </div>
          </div>
          <h2 className="mx-3">Mr Rahim</h2>
        </div>
        <div className="flex items-center">
          <FaStar className="mx-2 text-orange-500" />
          <p>
            <span className="font-bold text-xl">3.5</span>/5
          </p>
        </div>
      </div>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur sed
        similique aperiam et! Dolores ea sed explicabo, inventore amet quo quasi
        optio voluptate? Laborum tenetur perferendis ducimus quasi ab neque?
      </p>
      <div className="card-actions justify-end cursor-pointer gap-x-5">
        <div className="flex items-center">
          <FaRegHeart /> <small>12</small>
        </div>
        <div className="flex items-center">
          <FaRegComment /> <small>10</small>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
