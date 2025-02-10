"use client";

import { Fragment, useEffect, useState } from "react";
import { SiDotnet, SiLaravel, SiNodedotjs, SiVuedotjs } from "react-icons/si";
import { Modal } from "../Modal";
import { CSharp } from "./timeline/CSharp";
import { NodeJS } from "./timeline/NodeJS";
import { Laravel } from "./timeline/Laravel";

// Horizontal timeline component that displays clickable timeline items
export function HorizontalTimeline({ items }: HorizontalTimelineProps) {
    const [hasClicked, setHasClicked] = useState(true);
    const [dialogContent, setDialogContent] = useState<React.ReactNode>(null);

    useEffect(() => {
        setHasClicked(localStorage.getItem("hasClicked") === "true");
    }, []);

    const onItemClick = (item: TimelineItem) => {
        setClicked();
        setDialogContent(item.dialogContent);
    };

    const closeDialog = () => {
        setDialogContent(null);
    };

    const setClicked = () => {
        setHasClicked(true);
        localStorage.setItem("hasClicked", "true");
    }


    return (
        <>
            <Modal open={dialogContent !== null} onClose={closeDialog}>
                {dialogContent}
            </Modal>
            <div className="flex items-center justify-center mt-8 px-4">
                {items.map((item, index) => (
                    <Fragment key={index}>
                        <div
                            onClick={() => onItemClick(item)}
                            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform relative"
                        >
                            {index === 0 && !hasClicked && (
                                <div className="absolute top-0 -mt-6 text-white text-xs font-semibold">
                                    Click me!
                                </div>
                            )}
                            <div className="w-12 h-12 flex items-center justify-center bg-black border-2 rounded-full">
                                {item.icon}
                            </div>
                            <p className="mt-2 text-white font-semibold">{item.year}</p>
                            <p className="text-white/70">{item.tech}</p>
                        </div>
                        {index !== items.length - 1 && (
                            <div className="flex-1 h-1 bg-purple-500 mx-4" aria-hidden="true" />
                        )}
                    </Fragment>
                ))}
            </div>
        </>
    );
}

interface HorizontalTimelineProps {
    items: TimelineItem[];
}

export interface TimelineItem {
    year: string;
    tech: string;
    icon: React.ReactNode;
    dialogContent: React.ReactNode;
}

export const timelineItems: TimelineItem[] = [
    {
        year: "2022-10",
        tech: "C#",
        icon: <SiDotnet className="w-6 h-6" />,
        dialogContent: <CSharp />,
    },
    {
        year: "2022-12",
        tech: "Node.js",
        icon: <SiNodedotjs className="w-6 h-6" />,
        dialogContent: <NodeJS />,
    },
    {
        year: "2023",
        tech: "Laravel",
        icon: <SiLaravel className="w-6 h-6" />,
        dialogContent: <Laravel />,
    },
    {
        year: "2023",
        tech: "Vue",
        icon: <SiVuedotjs className="w-6 h-6" />,
        dialogContent: (
            <div>
                <h2 className="text-2xl font-bold mb-2">Vue Details</h2>
                <p className="text-white/70">
                    My experience with Vue in 2023 enabled me to create reactive and dynamic user interfaces, all while keeping the code modular and maintainable.
                </p>
            </div>
        ),
    },

];
