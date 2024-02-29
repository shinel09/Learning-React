import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";

const FetchData = () => {
  // hooks
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetching blogs with axios
  const fetchBlogs = async () => {
    const url = "https://blogg-api-v1.onrender.com/blogs/all";

    try {
      setLoading(true);
      const response = await axios.get(url);
      const data = await response?.data;

      // console.log(data?.blogs);
      if (data) {
        setBlogs(data?.blogs);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }

    // Using fetch
    // try {
    //     const response = await fetch(url)
    //     const data = await response.json();
    //     // console.log(data.blogs);
    //     setBlogs(data?.blogs);
    // } catch (error) {
    //     console.log(error);

    // }
  };

  //    fetchBlogs();
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Loader
  // if (loading) {
  //   return <Loader />;
  // }

  // console.log(blogs);
  return (
    <div>
      <h1>Fetch data component</h1>

      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="row d-flex gap-3  justify-content-center">
            {blogs.map((blog) => {
              return (
                <div
                  className="col-12 col-md-4 col-lg-3 rounded"
                  style={{
                    height: "400px",
                    backgroundColor: "#eee",
                    padding: "5px",
                  }}
                  key={blog._id}
                >
                  <div
                    className="card-image"
                    style={{ width: "100%", backgroundColor: "red" }}
                  >
                    <img
                      src={blog.imageUrl}
                      alt=""
                      width="100%"
                      height="200px"
                    />
                  </div>
                  <div className="text-start">
                    <b>{blog.title}</b>
                    <p>{blog.content.slice(0, 35)}</p>
                    <p>{blog.author}</p>
                    <p>{blog.read_time}min</p>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default FetchData;