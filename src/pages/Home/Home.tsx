import "./Home.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

import image1 from "../../assets/1.webp";
import image2 from "../../assets/2.webp";
import image3 from "../../assets/3.webp";
import image4 from "../../assets/4.webp";
import image5 from "../../assets/5.webp";
import image6 from "../../assets/6.webp";

const imgContainer = [image1, image2, image3, image4, image5, image6];

const features = [
  {
    id: 0,
    content: "Inserted, modify, and delete data",
  },
  {
    id: 1,
    content: "Search, sorting, and filtering data",
  },
  {
    id: 2,
    content:
      "Graphed data to analyze and track income and expenses efficiently",
  },
  {
    id: 3,
    content: "Final report to check the net income",
  },
  {
    id: 4,
    content: "Save and load data locally as a JSON file",
  },
  {
    id: 5,
    content:
      "Import an Excel file as data and export the data as an Excel file.",
  },
  {
    id: 6,
    content: "Receipt scanning feature for faster data input (in progress)",
  },
];

export default function Home() {
  return (
    <div className="project-page">
      <h1 className="project-title">Hanara Sushi - Expense & Income Manager</h1>

      <div className="project-content">
        <section className="project-info">
          <h2>Project Description</h2>
          <p>
            It is designed for efficient income and expenses management of
            Hanara Sushi. Income and expenses data can be inserted, modified,
            and deleted, and all necessary functions such as search, sorting,
            and filtering are included. In the dashboard menu, data can be
            graphed to make it easier for users to analyze and track income and
            expenses efficiently. Additionally, in the Income Manager's report
            tab, you can view the current net income by comparing the income and
            expenses data.
          </p>
          <p>
            Users can store and import the income and expenses data on their
            local computer as a JSON file, and they can also import Excel files
            as data and export the data as an Excel file.
          </p>
          <p>
            Receipt scanning is currently under development, and additional
            features will be added in the future.
          </p>
        </section>

        <section className="project-features">
          <h2>Features</h2>
          <ul>
            {features.map((content, index) => {
              return (
                <li>
                  {index + 1}. {content.content}
                </li>
              );
            })}
          </ul>
        </section>

        <section className="project-screenshots">
          <h2>Screenshots</h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            keyboard={{
              enabled: true,
            }}
            loop={true}
            modules={[Pagination, Navigation, Keyboard]}
            navigation={true}
            className="mySwiper"
          >
            {imgContainer.map((content, index) => {
              return (
                <SwiperSlide>
                  <img src={content} loading="lazy" alt="img" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>

        <section className="project-demo">
          <h2>Demo Video</h2>
          <video width="750" height="500" controls>
            <source src="demo.mp4" type="video/mp4" />
            죄송합니다, 브라우저가 비디오 태그를 지원하지 않습니다.
          </video>
        </section>
      </div>
    </div>
  );
}
