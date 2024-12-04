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

async function getUser(credential: any) {
  const res = await fetch(`${config.API_URL}/auth/get-user/${credential}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "ngrok-skip-browser-warning": "69420"
    },
  });
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

async function getCourses() {
  const res = await fetch(config.API_URL + `/courses`, {
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

async function getCategoryContentAlt(filter: string) {
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

async function getCategoryContentByUserId(id: any) {
  const res = await fetch(config.API_URL + `/texts/home/category/content/${id}/dashboard`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "ngrok-skip-browser-warning": "69420"
    },
  })
  return res.json()
}

async function getCategoryContentCustom(id: any, initialDate: Date, finalDate: Date) {
  try {
    const res = await fetch(config.API_URL + `/texts/home/category/content/${id}/dashboard/custom`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '69420'
      },
      body: JSON.stringify({
        initialDate,
        finalDate
      })
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status} - ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Failed to fetch category content:', error);
    throw error; // Opcional: propaga o erro para quem chamar a função
  }
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

const handleView = async (id: string) => {
  try {
    const response = await fetch(`${config.API_URL}/videos/${id}/campaign/view`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "69420"
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch view');
    }
  } catch (error) {
    console.error('Error fetching view:', error);
  }
}

const handleClick = async (id: string) => {
  try {
    const response = await fetch(`${config.API_URL}/videos/${id}/campaign/click`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "69420"
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch view');
    }
  } catch (error) {
    console.error('Error fetching view:', error);
  }
}

const teste2 = async () => {
  try {
    const response = await fetch('https://sandbox.asaas.com/api/v3/paymentLinks', {
      method: 'POST',
//      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'content-type': 'application/json',
        'access_token': '$aact_MzkwODA2MWY2OGM3MWRlMDU2NWM3MzJlNzZmNGZhZGY6OjRkNzhlNjgyLWY4YWItNGZhNC1hODQ5LWY4N2IwMTdhN2E0Zjo6JGFhY2hfZDBjMzQ5YjEtYTlmNy00M2UwLThlNzQtZmI4MmRiMTM5M2Q1',
        'User-Agent': 'Grupo Fera',
      },
      body: JSON.stringify({
        billingType: 'UNDEFINED',
        chargeType: 'DETACHED',
        name: 'alamo',
        value: 5,
        dueDateLimitDays: 1,
      })
    });

    console.log(response);
    
  } catch (error) {
    console.error('Error fetching view:', error);
  }
}

export {
  getVideos,
  getVideoById,
  getCategories,
  getHomeCategories,
  getCampaigns,
  getOneCampaign,
  getCategoryContent,
  getOneCategoryContent,
  handleView,
  getCategoryContentByUserId,
  handleClick,
  getCourses,
  getCategoryContentCustom,
  teste2,
  getUser
}