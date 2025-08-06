import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data= useLoaderData();
  // const [data, setData] = useState({});
  //     useEffect( ()=>{
  //         fetch("https://api.github.com/users/biplavpaudel123", {
  //   method: "GET",
  //   headers: {
  //     "Accept": "application/vnd.github+json",
  //     "X-GitHub-Api-Version": "2022-11-28"
  //   }
  // })
  //   .then(response =>response.json())
  //   .then(data=>setData(data));
  //     },[])
  return (
    <>
    <div>Github Followers: {JSON.stringify(data.followers)}</div>
    <div><img src={data.avatar_url} alt="biplav-github-avatar" /></div>
    </>
)
}

export default Github;

export const  githubDataLoader = async() => {
  const  response = await fetch("https://api.github.com/users/biplavpaudel123", {
    method: "GET",
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  })
    return response.json();
};
