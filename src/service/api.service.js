import axios from "axios"

const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'd6521dcf05msh8f37a1ab9e63164p1fefb1jsn9f670d68ba54',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
}


export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options)
    return response.data
  },
}