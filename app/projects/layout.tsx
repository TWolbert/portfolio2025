import Link from "next/link";

export default function Projects({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            Projects
            <div className=" flex gap-2">
                <Link href="/projects/zuivelstad">
                    <p>Zuivelstad</p>
                </Link>
                <Link href="/projects/inspect">
                    <p>tjecco Inspect</p>
                </Link>
            </div>


            <div>
                {children}
            </div>
        </div>
    )
}