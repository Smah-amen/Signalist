import Image from "next/image";
import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth-layout ">
      <section className="auth-left-section scrollbar-hide-defult">
        <Link href="/" className="auth-logo">
        <Image src="/assets/icons/logo.svg" alt="signalist logo" width={140} height={32} className="h-8 w-auto" />
        </Link>
        </section>
    </main>
  );
};

export default layout;
