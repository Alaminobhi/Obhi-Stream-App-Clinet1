"use client"
import React from "react";
import ReactPlayer from 'react-player'
import VideoPlayer from './stream-components/VideoPlayer';
import { BACKEND_URI } from "../config/constants";

const UploadsList = ({ media }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th width="200">Name</th>
              <th>Videos</th>
            </tr>
          </thead>
          <tbody>
                  <tr>
                    <td>{media.name}</td>
                    <td>
                      {media.videos.map((video) => {
                        let url = `http://localhost:5000/${video}`
                        // console.log(url);
                        return (
                          <div key={video}>
                              <ReactPlayer
                                className='react-player'
                                url={url}
                                controls
                              />
                              <div>
                                <code>{video}</code>
                              </div>
                          </div>
                        );
                      })}
                    </td>
                  </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UploadsList;