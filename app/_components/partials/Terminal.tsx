"use client";
import React, { useState } from "react";
import { Fira_Code } from "next/font/google";
import { HeartFill } from "react-bootstrap-icons";

import Link from "next/link";
import { IconButton } from "../IconButton";
import { toast, ToastContainer } from "react-toastify";

const firaCode = Fira_Code({
    variable: "--font-fira-code",
    subsets: ["latin"],
});


export default function Terminal() {
    const [inputValue, setInputValue] = useState("For the love of it_");
    const [terminalMode, setTerminalMode] = useState(false);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handeEnter = () => {
        if (inputValue === 'start' && !terminalMode) {
            setTerminalMode(true)
            toast.success('Starting up...')
        }
        else if (inputValue === 'exit' && terminalMode) {
            setTerminalMode(false)
            toast.success('Shutting down...')
            setInputValue('For the love of it_')
            return;
        }
        else {
            toast.error('Command not found')
        }

        setInputValue('')
    }


    return (
        <div className={`h-96 xl:w-full flex ${!terminalMode && 'items-center'} ${terminalMode && 'justify-end'} ${terminalMode && 'items-start'} relative ${!terminalMode && 'justify-center'} overflow-hidden lg:bg-black rounded-xl lg:border-2 lg:border-purple-500 flex-col`}>
            <ToastContainer theme="dark" className='absolute top-2 right-2 xl:block hidden' />
            <div className="mb-3 flex gap-4 items-center justify-center">
                <p className={`font-bold text-2xl lg:text-3xl text-purple-500 ${terminalMode && 'ml-4'}`}>{'>'}</p>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => onChange(e)}
                    // On enter press
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handeEnter()
                        }
                    }}
                    className={` ${firaCode.className} font-bold text-2xl lg:text-3xl text-purple-500 bg-transparent border-none focus:outline-none`}
                />
            </div>
            {!terminalMode && <>
                <p className=" text-white/70 text-center max-w-md">
                    Hi, I&apos;m Teun Wolbert. I&apos;m a software engineer from the Netherlands, I specialize in web development and design
                </p>
                <div className="mt-5 lg:p-0 p-2">
                    <Link href="/projects" className="max-w-md">
                        <IconButton icon={<HeartFill />}>Sounds cool, show me what you&apos;ve made!</IconButton>
                    </Link>
                </div>
            </>
            }
        </div>
    )
}