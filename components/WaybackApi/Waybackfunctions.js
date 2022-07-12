const WAYBACK_URL ='https://archive.org/wayback/available'


export async function getInfos (urlSite,timestamp) {
  let infos={url:'',time:''}

  try {
    const response = await fetch(
      `${WAYBACK_URL}?url=${urlSite}&timestamp=${timestamp}`
    );
    const json = await response.json();
    infos={url : json.archived_snapshots.closest.url, time : json.archived_snapshots.timestamp}
    return infos
  } catch (error) {
    console.error(error);
  }
}

