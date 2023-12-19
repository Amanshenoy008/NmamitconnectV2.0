import Link from "next/link";
import {useRouter} from "next/router";

const Sidebar = () => {
  const obj = [
    {
      name: "AuthorCraft",
      url: "/AuthorCraft",
    },
    {
      name: "Saca",
      url: "/Saca",
    },
    {
      name: "Vista",
      url: "/Vista",
    },
    {
        name:"Rachana",
        url:"/Rachana",
    },
    {
        name:"Tallem",
        url:"/Tallem",
    }
  ];
  const router = useRouter()
  const handleclick = (id:string)=>{
    router.push('/clubs'+id)
  }
  return (
    <>
      <div className="w-fill h-fill  rounded-2xl p-5 flex flex-col items-center justify-around bg-black gap-5 mx-2">
        {obj.map(({ name, url }) => (
          <div
            key={name}
            className=" w-24  border-2 btn p-2 rounded-xl bg-gray-500/40 text-bold overflow-hidden" onClick={()=>handleclick(url)}
          >
              <span className=" ">{name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
