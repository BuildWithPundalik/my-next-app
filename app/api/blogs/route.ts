export async function GET(request: Request) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6", {
    cache: "no-store",
  });
  const blogs = await res.json();

  return Response.json({ blogs })
}