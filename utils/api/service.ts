import { config } from "../../config"

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

async function getCategories() {
  const res = await fetch(config.API_URL + `/texts/categories`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "ngrok-skip-browser-warning": "69420"
    },
  })
  return res.json()
}

async function getHomeCategories() {
  const res = await fetch(config.API_URL + `/texts/home/categories`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "ngrok-skip-browser-warning": "69420"
    },
  })
  return res.json()
}

async function getCampaigns() {
  const res = await fetch(config.API_URL + `/texts/home/campaigns`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "ngrok-skip-browser-warning": "69420"
    },
  })
  return res.json()
}

async function getOneCampaign(id: any) {
  const res = await fetch(config.API_URL + `/texts/home/campaigns/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "ngrok-skip-browser-warning": "69420"
    },
  })
  return res.json()
}

async function getCategoryContent(filter: string) {
  const res = await fetch(config.API_URL + `/texts/home/category/${filter}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "ngrok-skip-browser-warning": "69420"
    },
  })
  return res.json()
}

async function getOneCategoryContent(id: any) {
  const res = await fetch(config.API_URL + `/texts/home/category/content/${id}`, {
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
  getCategories,
  getHomeCategories,
  getCampaigns,
  getOneCampaign,
  getCategoryContent,
  getOneCategoryContent
}