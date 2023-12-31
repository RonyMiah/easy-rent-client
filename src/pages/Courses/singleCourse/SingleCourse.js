import React, { useEffect } from "react";
import Appbar from "../../Shared/Appbar/Appbar";
import Footer from "../../Shared/Footer/Footer";
import CourseVideo from "./CourseVideo";
import { useParams } from "react-router-dom";

const SingleCourse = () => {
  const { courseId } = useParams();
  // console.log(courseId)
  // useEffect(() => {
  //   fetch(`http://localhost:5000/api/find/singleCourse/${courseId}`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.data));
  // }, [courseId]);
  return (
    <div style={{ backgroundColor: "##F3F5F9" }}>
      <Appbar />
      <CourseVideo courseId={courseId} />
      <Footer />
    </div>
  );
};

export default SingleCourse;
