interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

import { motion, AnimatePresence } from "framer-motion";
import { IconButton } from "./IconButton";
import { X } from "react-bootstrap-icons";

// Modal component that now animates in and out using Framer Motion.
export function Modal({ open, onClose, children }: ModalProps) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed lg:p-0 p-3 inset-0 z-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black"
                        onClick={onClose}
                        aria-hidden="true"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                    {/* Modal Content */}
                    <motion.div
                        className="relative backdrop-blur-sm bg-black/50 text-white border rounded-xl p-6 z-10 max-w-lg w-full"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {children}
                        <IconButton
                            icon={<X className=" scale-150" />}
                            onClick={onClose}
                            className="mt-4 px-4 py-2 bg-purple-500 rounded hover:bg-purple-600"
                        >
                            Close
                        </IconButton>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}