import { config } from "../config"

async function getVideos() {
  const res = await fetch(config.API_URL + `/videos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "ngrok-skip-browser-warning": "69420"
    },
  })
  return res.json()
}

async function getVideoById(videoId: string) {
  const res = await fetch(config.API_URL + `/videos/${videoId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "ngrok-skip-browser-warning": "69420"
    },
  })
  return res.json()
}



export {
  getVideos,
  getVideoById,
}