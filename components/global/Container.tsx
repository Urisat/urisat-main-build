/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { motion } from "motion/react"
import React from 'react'
import { cn } from "@/lib/utils";

interface Props{
    children: React.ReactNode;
    className?:string;
    delay?: number;
    reverse?: boolean;
}

const Container = ({children,className,delay=0.2,reverse }:Props) => {
  return (
    <motion.div
    initial={{opacity:0,y:reverse? -20:20}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:false}}
    transition={{delay:delay,duration:8.4,ease:'easeInOut'}}
    className={cn('w-full h-full',className)}
    >
        {children}
    </motion.div>
  )
}

export default Container