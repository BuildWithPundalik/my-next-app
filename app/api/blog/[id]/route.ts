export async function GET(request: Request, { params }: { params: { id: string } }) {

const id= await params.id 
if(id){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`, {
    cache: "no-store",
  });
  const blog = await res.json();
  console.log(blog)
  return Response.json({ blog: blog[0] || null });
}
  
  
return Response.json({message: "No id"})
  
}