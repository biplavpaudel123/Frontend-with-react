
import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
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
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-xl p-10 flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Avatar Section */}
        <div className="flex flex-col items-center md:items-start">
          <img
            className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-blue-500 shadow-lg"
            src={data.avatar_url}
            alt={`${data.name}'s avatar`}
          />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">{data.name}</h1>
          <p className="text-lg text-gray-500">@{data.login}</p>
        </div>

        {/* Info Section */}
        <div className="flex-1 w-full space-y-6">
          <p className="text-xl text-gray-700">{data.bio}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 text-lg">
            {data.location && (
              <p>
                📍 <span className="font-medium">{data.location}</span>
              </p>
            )}
            {data.company && (
              <p>
                🏢 <span className="font-medium">{data.company}</span>
              </p>
            )}
            {data.blog && (
              <p>
                🔗{" "}
                <a
                  href={`https://${data.blog}`}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.blog}
                </a>
              </p>
            )}
            <p>
              📅 Joined on{" "}
              {new Date(data.created_at).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-center mt-6">
            <div>
              <p className="text-2xl font-bold text-blue-600">{data.followers}</p>
              <p className="text-gray-600">Followers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">{data.following}</p>
              <p className="text-gray-600">Following</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">{data.public_repos}</p>
              <p className="text-gray-600">Repos</p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-8">
            <a
              href={data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-700 transition"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
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
