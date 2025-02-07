interface IconButtonProps extends React.ComponentProps<"button"> {
    icon: React.ReactNode;
}

export function IconButton({ icon, children, className, ...props }: IconButtonProps) {
    return (
        <button
            {...props}
            className={'bg-white border hover:bg-white/90 transition-colors border-white text-black rounded-md flex items-center gap-2 px-5 py-2 font-bold ' + className}
        >
            {icon}
            {children}
        </button>
    );
}