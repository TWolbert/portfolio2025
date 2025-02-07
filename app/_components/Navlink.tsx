"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navlink({
  href,
  children,
  className,
  onClick
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const url = usePathname();
  const [isActive, setIsActive] = useState(url === href);
  
  useEffect(() => {
    setIsActive(url === href);
  }, [url, href]);

  return (
    <>
      {isActive ? (
        <>
          <Link href={href} onClick={onClick} className={" text-white" + className}>
            {children}
          </Link>
        </>
      ) : (
        <>
            <Link
                href={href}
                onClick={onClick}
                className={" text-white/50 " + className}
            >
                {children}
            </Link>
        </>
      )}
    </>
  );
}
