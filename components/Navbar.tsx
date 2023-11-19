import { auth } from "@/firebaseinit/init";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [user, setUser]: any = useState(null);
  const prov = new GoogleAuthProvider();

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, prov).then((d) => {
        console.log(d?.user?.displayName);
        setUser(d?.user);
      }); // add signin toast here later
    } catch (err) {
      console.error(err);
    }
  };
  const handleSignOut = async () => {
    try {
      await signOut(auth).then((d) => {
        console.log("logged out");
        setUser(null);
      }); // add signout toast later
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className=" bg-black w-full   flex flex-row justify-evenly p-5 items-center rounded-b-3xl">
      <div>
        {user ? (
          <Image
            src={`${user.photoURL}`}
            width={80}
            height={80}
            className="rounded-xl mask mask-hexagon hover:scale-90 cursor-pointer transition ease-in-out "
            alt="pic not found"
            quality={100}
          />
        ) : (
          <span></span>
        )}
      </div>
      <div className=" p-5 text-3xl">
        {"Welcome User@ " + (user ? user.displayName : "007")}
      </div>
      <div>
        {user ? (
          <button className="btn" onClick={handleSignOut}>
            Log Out
          </button>
        ) : (
          <button className="btn" onClick={handleSignIn}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
