import React from "react";
import { useState } from "react";
import axios from "axios";

const userDetails = ({ detail }) => {
  const [userDetails, setUserDetails] = useState("");
  const[albums,setAlbums] = useState("");

  const fetchDetails = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${detail.id}/posts`)
      .then((response) => {
        setUserDetails(response.data);
        // const res = await fetch(`https://jsonplaceholder.typicode.com/users/${detail.id}/posts`)
        // setUserDetails(await res.json())
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const fetchAlbum = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${detail.id}/albums`)
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          {detail.name}
        </div>
        <ul>
          <li className=" text-white">
            <strong>username: </strong>
            {detail.username}
          </li>
          <li className=" text-white">
            <strong>email: </strong>
            {detail.email}
          </li>
          <li className=" text-white">
            <strong>phone: </strong>
            {detail.phone}
          </li>
          <li className=" text-white">
            <strong>Company name: </strong>
            {detail.company.name}
          </li>
          <li className=" text-white">
            <strong>latitude : </strong>
            {detail.address.geo.lat}
          </li>
          <li className=" text-white">
            <strong> longitude: </strong>
            {detail.address.geo.lng}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <button
          onClick={fetchDetails}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold mr-4 py-2 px-4 mb-2 rounded"
        >
          Posts
        </button>


        {userDetails.length > 0 ? (
          <div>
            {userDetails.map((post) => (
              <div key={post.id}>
                <h3 className=" text-white">
                  <strong>title: </strong> {post.title}
                </h3>
                <p className=" text-white">
                  <strong>body: </strong> {post.body}
                </p>
              </div>
            ))}
          </div>
        ): ('')}

        <button
          onClick={fetchAlbum}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Albums
        </button>
        {albums.length > 0 ? (
          albums.map((album) => (
            <div key={album.id}>
              <h3 className=" text-white"><strong>title: </strong>{album.title}</h3>
            </div>
          ))
        ) : ('')}
      </div>
    </div>
  );
};

export default userDetails;
