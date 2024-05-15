const BASE_URL = 'https://90c6-2804-14c-7582-5093-4765-a75d-5a26-5e1a.ngrok-free.app'

async function getVideos() {
  const res = await fetch(BASE_URL + `/videos`)
  return res.json()
}

async function getVideoById(videoId: string) {
  const res = await fetch(BASE_URL + `/videos/${videoId}`)
  return res.json()
}

export {
  getVideos,
  getVideoById
}