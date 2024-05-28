import React from "react";
import BlogImage from "../../assets/images/blog-image.png";

const BlogCard: React.FC<any> = () => {
  return (
    <div className="flex w-full h-auto flex-col bg-white rounded-2xl p-10 sm:w-auto">
      <img src={BlogImage} className="w-full h-4/5" />
      <p className="text-black font-semibold text-2xl mt-5">Lorem Ipsum</p>
      <p className="text-black font-normal text-xl mt-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text...
      </p>
    </div>
  );
};

export default BlogCard;
