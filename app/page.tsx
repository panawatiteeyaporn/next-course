import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { authOptions } from "./api/auth/authOptions";
import ProductCard from "./components/ProductCard";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="relative h-screen">
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      <div>
        <Image
          src="https://bit.ly/react-cover"
          alt="Dog"
          fill
          className="object-contain"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          quality={75}
          priority
        />
      </div>
    </main>
  );
}
