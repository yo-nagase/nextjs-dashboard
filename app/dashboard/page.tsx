
export default async function Page() {
  // await for 10 sec
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <p>dashboard page</p>;
}
