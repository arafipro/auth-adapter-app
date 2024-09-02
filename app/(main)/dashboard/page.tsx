import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const runtime = "edge";

export default async function Dashboard() {
  const session = await auth();
  if (!session) return redirect("/");
  return (
    <div className="text-3xl text-center mt-8 p-4 bg-red-300">Dashboard</div>
  );
}
