import React from "react";

const Blog: React.FC<any> = () => {
  return (
    <section>
      <div className="flex bg-black h-screen flex-col bg-[url(./assets/images/blog-bg.png)] p-10">
        <div className="flex flex-row">
          <p className="text-black font-light text-4xl mr-2">Our</p>
          <p className="text-black font-semibold text-4xl">Blogs</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
