import Image from "next/image";

export function NodeJS() {
    const alt = "Email feed with a bunch of emails containing the Bee movie script";
    return (
        <div>
            <h2 className="text-2xl font-bold mb-2">Node.js</h2>
            <p className="text-white/70 mb-2">
                Quite early in my study I was introduced to NodeJS by a classmate of mine. The way we used it initially was quite stupid.
            </p>
            <Image className="w-full mb-2 rounded-md" src="/BeeMovie.png" width={0} height={0} alt={alt} />
            <p className="text-sm italic text-white/40 mb-2">{alt}</p>
            <p className="text-white/70 mb-2">
                We used NodeJS to read a file and then send the contents of that file to an email address. The file we read was the Bee movie script. It was a fun little project and I learned a lot about how to use NodeJS.
            </p>
            <p className="text-white/70">
                P.S I still have the script memorized; and my e-mail has not been blacklisted.
            </p>
        </div>
    );
}