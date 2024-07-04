import { motion } from "framer-motion";

export default function UnderlineText({children}){

    return (
        <motion.span
        whileHover='hover'
        className="relative" 
        >
            {children}
            <motion.div
                className="underline dark:bg-white bg-black"
                variants={{
                default: { width: 0 },
                hover: { width: '100%' },
                }}
                transition={{ duration: 0.3 }}
            />
        </motion.span> 
    )

}