const BASE_URL = 'https://1ad6-2804-14c-7582-5093-4765-a75d-5a26-5e1a.ngrok-free.app'

async function getVideos() {
  const res = await fetch(BASE_URL + `/videos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "ngrok-skip-browser-warning": "69420"
    },
  })
  return res.json()
}

async function getVideoById(videoId: string) {
  const res = await fetch(BASE_URL + `/videos/${videoId}`, {
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
  getVideoById
}