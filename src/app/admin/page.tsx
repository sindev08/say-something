import { auth } from "@/lib/auth";

const Page = async () => {
  const session = await auth();

  if (!session) {
    return <div>UnAuthorized</div>;
  }
  if (session.user?.email !== "singgihboedipurnadi@gmail.com") {
    return <div>Kamu gak boleh masuk, karena bukan admin</div>;
  }
  return <div>Ini cuma bisa diakses admin</div>;
};

export default Page;
