import Link from "next/link";
import { useRouter } from "next/navigation";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function TransitionLink({ href, children, ...props }) {
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();

    const body = document.querySelector("body");

    body?.classList.add("page-transition");

    await sleep(600);

    router.push(href);

    body?.classList.remove("page-transition");
  };

  return (
    <Link onClick={handleClick} href={href} {...props}>
      {children}
    </Link>
  );
}
