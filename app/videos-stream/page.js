"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadForm from "../components/UploadForm";
import MovieListComponent from "../components/MovieListComponent";
import { BACKEND_URI } from "../config/constants";

const VideoStream = () => {
//   const [medias, setMedias] = useState([]);
//  console.log(medias);
  // useEffect(() => {
  //   getAllMedias();
  // }, []);

  // const getAllMedias = async () => {

  //   try {
  //       // const response = fetch(`${BACKEND_URI}/api/v1/media/all`);
  //       fetch(`${BACKEND_URI}/api/v1/media/all`)
  //           .then((res) => res.json())
  //           .then((json) => {
  //               setMedias(json);
  //               alert('update successfully');
  //           });
  //   }
  //   catch (error) {
  //       console.log(error)
  //   }

  //   // axios
  //   //   .get(`${BACKEND_URI}/api/v1/media/all`)
  //   //   .then((result) => {
  //   //     setMedias(result.data);
  //   //   })
  //   //   .catch((error) => {
  //   //     setMedias([]);
  //   //     console.log(error);
  //   //     alert("Error happened!");
  //   //   });
  // };

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadForm />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
            <div className="row">
      <div className="col-md-12">
        {/* <table className="table table-bordered">
          <thead>
            <tr>
              <th width="200">Name</th>
              <th>Videos</th>
            </tr>
          </thead>
          <tbody>
            {
                medias && medias?.map((media)=>(
                   <UploadsList key={media._id} media={media}/>
            ))}
          </tbody>
        </table> */}

        <MovieListComponent/>
      </div>
    </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoStream;