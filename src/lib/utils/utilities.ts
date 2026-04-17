export async function fetcher<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    console.error(`Error fetching data from ${url}:`, response.statusText);
    throw new Error(`An error has occurred while fetching ${url}: ${response.status}`);
  }
  const json = await response.json();
  console.log(json);

  return json;
}
