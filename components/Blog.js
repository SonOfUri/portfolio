"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const BlogSlider = () => {
  const blogItems = [
    {
      id: 1,
      title: "Demystifying the Optimism Superchain",
      img: "assets/img/blog/blog.webp",
      category: "Development",
      date: "Jul 12, 2024",
      readingTime: "6 min",
      link: "https://medium.com/@sonofuri/demystifying-the-optimism-superchain-️-ac1d1545cdfe",
    },
    {
      id: 2,
      title: "Exploring the Future of Blockchain",
      img: "assets/img/blog/blog.webp",
      category: "Tech",
      date: "Jul 15, 2024",
      readingTime: "5 min",
      link: "https://medium.com/@sonofuri/demystifying-the-optimism-superchain-️-ac1d1545cdfe",
    },
    {
      id: 3,
      title: "AI Advancements in 2024",
      img: "assets/img/blog/blog.webp",
      category: "AI",
      date: "Jul 20, 2024",
      readingTime: "10 min",
      link: "https://medium.com/@sonofuri/demystifying-the-optimism-superchain-️-ac1d1545cdfe",
    },
  ];
  return (
    <div className="article-publications">
      <h2 className="main-common-title">Article and Publications</h2>
      <div className="article-publications-main">
        <Slider
          {...sliderProps.blogSlider}
          className="row article-publications-slider"
        >
          {blogItems.map((item) => (
            <div className="col-lg-6" key={item.id}>
              <div className="article-publications-item">
                <div className="image">
                  <Link href={item.link}  className="d-block w-100">
                    <img
                      src={item.img}
                      alt="blog-img-1"
                      className="img-fluid w-100"
                    />
                  </Link>
                  <Link href={item.link}  className="tags">
                    {item.category}
                  </Link>
                </div>
                <div className="text">
                  <Link href={item.link}  className="title">
                    {item.title}
                  </Link>
                  <ul className="list-unstyled">
                    <li>{item.readingTime} read</li>
                    <li>{item.date}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default BlogSlider;
