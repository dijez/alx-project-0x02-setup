import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header"
import { useState } from "react";
import PostModal from "@/components/common/PostModal";
import Link from "next/link";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function Home() {
  return (
   <div>
    <Header />
    <h1>WELCOME</h1>

    <p>Go to     <Link href="/home" >home</Link> to add posts</p>
   </div>
  );
}
