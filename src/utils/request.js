export const API_KEY = "1ce5a78d65bd3986f12ab2d8209fff2d"
export const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2U1YTc4ZDY1YmQzOTg2ZjEyYWIyZDgyMDlmZmYyZCIsInN1YiI6IjY0MjY3MzcxOWNjNjdiMDU3MTU2YjY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BlpQxcB7ricju8rj7CZAtiRFkuYDRp1eQpiCDk6lcqE'


const requests = {
    discover : (type) =>  `https://api.themoviedb.org/3/discover/${type}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc` , 
    // discoverTv : 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc' ,
    netflixOriginals: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_networks=213', 
    topRated :(type) => `https://api.themoviedb.org/3/${ type }/top_rated?language=en-US&page=1` ,
}

export const keys = {
    tv : "tv" ,
    movie : "movie"
}

export default requests

