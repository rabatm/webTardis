import axios from 'axios';
const WAYBACK_URL ='https://archive.org/wayback/available'


export async function getInfos (urlSite,timestamp) {
  let infos={url:'',time:''}
  console.log(timestamp)
  try {
  const res = await axios.get(`${WAYBACK_URL}?url=${urlSite}&timestamp=${timestamp}`)

  if (res.data.archived_snapshots )
  {   
    infos={url : res.data.archived_snapshots.closest.url, time : res.data.archived_snapshots.closest.timestamp}
  }
  }
  catch {
    console.error('no info : from API')
  }

  return infos
}

