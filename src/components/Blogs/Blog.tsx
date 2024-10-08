type blogLike = {
  blog: {
    id: number;
    title: string;
    image: string;
    author: string;
    date: string;
    description: string;
  };
};

const Blog = ({ blog }: blogLike) => {
  return (
    <div data-aos="fade-up" data-aos-delay={`${blog.id * 2}00`}>
      <div className="mb-2 rounded-3xl overflow-clip">
        <img
          src={blog.image}
          alt="blog image"
          className="w-full h-[220px] object-cover hover:scale-105 duration-300"
        />
      </div>
      <p className="text-xs text-gray-500">{`${blog.date} by ${blog.author}`}</p>
      <article>
        <h3 className="my-2 font-bold line-clamp-1 dark:text-white">
          {blog.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {blog.description}
        </p>
      </article>
    </div>
  );
};

export default Blog;
