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

function getMobileOperatingSystem() {
  const userAgent = navigator.userAgent || navigator.vendor;

  if (/iPad|iPhone|iPod/.test(userAgent) && !/android/i.test(userAgent)) {
      return 'iOS';
  }

  if (/android/i.test(userAgent)) {
      return 'Android';
  }

  return 'unknown';
}

export {
  getVideos,
  getVideoById,
  getMobileOperatingSystem
}