export async function getBillionaries(): Promise<Billionary[]> {
  const response = await fetch("https://billions-api.nomadcoders.workers.dev");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch billionaries [getBillionaries]");
  }

  return resData;
}

export async function getPersonData(id: string): Promise<Person> {
  const response = await fetch(
    `https://billions-api.nomadcoders.workers.dev/person/${id}`
  );
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch person data [getPersonData]");
  }

  return resData;
}
