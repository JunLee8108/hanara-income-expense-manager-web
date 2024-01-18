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
import image7 from "../../assets/7.webp";
import image8 from "../../assets/8.webp";
import image9 from "../../assets/9.webp";
import image10 from "../../assets/10.webp";
import image11 from "../../assets/11.webp";
import image12 from "../../assets/12.webp";
import image13 from "../../assets/13.webp";
import image14 from "../../assets/14.webp";
import image15 from "../../assets/15.webp";
import image16 from "../../assets/16.webp";
import image17 from "../../assets/17.webp";
import image18 from "../../assets/18.webp";
import image19 from "../../assets/19.webp";
import image20 from "../../assets/20.webp";
import image21 from "../../assets/21.webp";
import image22 from "../../assets/22.webp";

const imgContainer = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
];

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
  const openLink = (url: string) => () => {
    window.open(url, "_blank");
  };

  return (
    <div className="project-page animation">
      <h1 className="project-title">Hanara Sushi - Expense & Income Manager</h1>

      <div className="project-content">
        <section className="project-info">
          <h2>Project Description</h2>
          <p>
            This desktop application is designed for efficient income and
            expenses management of Hanara Sushi. Income and expenses data can be
            inserted, modified, and deleted, and all necessary functions such as
            search, sorting, and filtering are included. In the dashboard menu,
            data can be graphed to make it easier for users to analyze and track
            income and expenses efficiently. Additionally, in the Income
            Manager's report tab, you can view the current net income by
            comparing the income and expenses data.
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

          <div className="project-download">
            <div className="project-download-windows">
              <h3>For Windows</h3>
              <button
                className="project-download-button"
                onClick={openLink(
                  "https://drive.google.com/file/d/1s5HcyyjwCWz-Idp4HVJTllm614ZxiND3/view?usp=sharing"
                )}
              >
                Download
              </button>
            </div>
            <div className="project-download-mac">
              <h3>For Mac</h3>
              <button
                className="project-download-button"
                onClick={openLink(
                  "https://drive.google.com/file/d/1ekZxUJYQpvj7kbJLF61kiK9hCAgFgIdD/view?usp=sharing"
                )}
              >
                Download
              </button>
            </div>
          </div>
        </section>

        <section className="project-features">
          <h2>Features</h2>
          <ul>
            {features.map((content, index) => {
              return (
                <li key={index}>
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
                <SwiperSlide key={index}>
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
