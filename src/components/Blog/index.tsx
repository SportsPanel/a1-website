import React from "react";
import BlogCard from "../BlogCard";

const Blog: React.FC<any> = () => {
  return (
    <section id="blogs">
      <div className="flex bg-black h-auto flex-col bg-[url(./assets/images/blog-bg.png)] p-10">
        <div className="flex flex-row">
          <p className="text-white font-light text-4xl mr-2">Our</p>
          <p className="text-white font-semibold text-4xl">Blogs</p>
        </div>
        <div className="w-full h-full flex flex-col mt-10 sm:flex-row sm:space-x-5">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  );
};

export default Blog;
