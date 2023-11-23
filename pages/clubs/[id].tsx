import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "@/firebaseinit/init";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";


const Club = () => {
    const router = useRouter()
    const {id } = router.query
    var s =''
    let coll:any= null
    
    switch(id){
        case 'AuthorCraft': s='AuthorCraft'
         coll = collection(db,s)
         break
        case 'Saca': s='Saca'
         coll = collection(db,s)
         break
        case 'Vista': s='Vista'
        coll = collection(db,s)
        break
        case 'Tallem': s='Tallem'
        coll = collection(db,s)
        break
        case 'Rachana': s='Rachana'
        coll = collection(db,s)
        break
        default: s=''
    }
    console.log(id)
    const [displaydata,setdisplaydata]:any=useState([])

    useEffect(()=>{
        const getdata = async()=>{
            if(coll){
            const d = await getDocs(coll)
            const fetchedData = d.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            console.log(fetchedData)
            setdisplaydata(fetchedData)
            }
        }
        getdata()
    },[id])


  return (<>
      <div className="bg-gray-400 w-screen h-screen overflow-hidden">
        { <Navbar />}     
        <div className="flex flex-row mx-5 mt-5 h-full">

        <div className="w-36  basis-1/4">
        <Sidebar /> 
        </div>
        <div className="text-xl bg-black text-white rounded-2xl  basis-3/4 ">
        <div className="flex flex-row flex-wrap gap-10 p-10 mx-10">
        {
             displaydata.map((doc:any)=>(
                <div className="card w-96 bg-neutral text-neutral-content" key={doc.id}>
                <div className="card-body items-center text-center">
                <h2 className="card-title">{doc.EventTitle}!</h2>
                <p>{doc.Description}.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">{doc.Venue}</button>
                <button className="btn btn-ghost">{doc.Date+" @ "+doc.Time}</button>
                </div>
              </div>
            </div>
             ))
        }
     </div>
    </div>
  </div>
</div>
    </>);
};

export default Club;
