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
  const prov = new GoogleAuthProvider();
  const [displaydata, setdisplaydata] = useState<any[]>([]);
  const handlec = async () => {
    await signInWithPopup(auth, prov).then((d) => {
      console.log(d?.user?.email);
    });
  };
  const coll = collection(db, "AuthorCraft");

  useEffect(() => {
    const getdata = async () => {
      const fdata = await getDocs(coll);
      const usefuldata = fdata.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(usefuldata);
      setdisplaydata(usefuldata);
    };
    if (!displaydata.length) {
      getdata();
    }
  });

  const handles = async () => {
    await signOut(auth);
  };
  useEffect(()=>{
    router.push('/clubs/AuthorCraft')
  },10)
  return (
    <>
      <div className="bg-gray-400 w-screen h-screen overflow-hidden">
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
