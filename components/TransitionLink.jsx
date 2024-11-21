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

    await sleep(500);

    router.push(href);
    await sleep(50);

    body?.classList.remove("page-transition");
  };

  return (
    <Link onClick={handleClick} href={href} {...props} prefetch={true}>
      {children}
    </Link>
  );
}
