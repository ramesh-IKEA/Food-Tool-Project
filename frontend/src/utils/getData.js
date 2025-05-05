const fetchJSON = url => fetch(url).then(response => response.json());

export const fetchData = async (url) => {
    const data = await fetchJSON(url);
    return data;
}