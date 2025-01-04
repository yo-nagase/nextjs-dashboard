export default async function Page() {
  // wait for 2 sec
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <p>Customers Page</p>
}

