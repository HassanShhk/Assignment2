import React, { useState } from 'react';
import "./GitHubSearch.css"

function GitHubUserSearch() 
{
  const [searchTerm, setSearchTerm] = useState("");
  const [userProfiles, setUserProfiles] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const fetchData = () => {
    fetch(`https://api.github.com/search/users?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setUserProfiles(data.items);
      });
  };

  return (
    <div>
      <div className='Bgs'>
    <h1>GitHubSearch</h1>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button onClick={fetchData}>Search</button></div>
      <ul>
        {userProfiles.map((profile) => (

          <center>
          <li key={profile.id}>
            <a href={profile.html_url}>
              <img src={profile.avatar_url} alt={`${profile.login} avatar`} />
              {profile.login}
            </a>
          </li></center>
        ))}
      </ul>

    </div>
  );
}

export default GitHubUserSearch;