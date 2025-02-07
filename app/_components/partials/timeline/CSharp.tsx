import Image from "next/image";

export function CSharp() {
    const alt = "Windows Forms window with a button that says 'Do your thing' that when clicked fills a textbox with 'Hello 2SV1' onclick";
    return (
        <div>
            <h2 className="text-2xl font-bold mb-2">CSharp/DotNet/WinForms</h2>
            <p className="text-white/70 mb-2">
                I started my journey in software dev with C#, not for any reason other than that my college teaches it first using the archaic old WinForms framework.
            </p>
            <Image className="w-full mb-2 rounded-md" src="/FirstCSharp.gif" width={0} height={0} alt={alt} unoptimized />
            <p className="text-sm italic text-white/40 mb-2">{alt}</p>
            <p className="text-white/70">
                I&apos;ve since moved on from C# in almost all capacities, but I still have a soft spot for C# and the .NET ecosystem. The simplicity of drag and dropping to create interfaces really has stuck with me.
            </p>
        </div>
    )
}