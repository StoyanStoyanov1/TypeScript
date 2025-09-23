import { Equal, Expect } from ".";

export async function fetchServerVersion(): Promise<number> {
  const response = await fetch("https://api.example.com/v");
  const data = await response.json();
  return data;
}

const example = async () => {
  const version: number = await fetchServerVersion();

  type test = Expect<Equal<typeof version, number>>;
};
