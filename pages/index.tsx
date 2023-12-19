import Image from "next/image";
import { auth } from "@/firebaseinit/init";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { db } from "@/firebaseinit/init";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()
  
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push('/clubs/AuthorCraft');
    }, 10000);

    return () => clearTimeout(redirectTimeout); 
  }, [router])
  return (
    <>
      <div className="bg-gradient-to-r from-blue-800 to-red-800 w-screen h-screen overflow-hidden">
        {<Navbar />}
        {/* <div>
      {
       displaydata && displaydata.map((d:any)=>(
          <div key={d.id}>
            {d.EventTitle}
           <h1>{d.Description}</h1> 
          </div>
        ))
      }
    </div>
    */}
        <div className="flex flex-row mx-5 mt-5">
          <div className="w-36 h-full basis-1/4">
            <Sidebar />
          </div>
          <div className="text-xl bg-black text-white rounded-2xl  basis-3/4 flex flex-row justify-center items-center">
            <div>{"Click on Left Buttons to View Club Events"}</div>
          </div>
        </div>
      </div>
    </>
  );
}
