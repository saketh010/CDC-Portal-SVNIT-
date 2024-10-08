// components/Layout/Header.js
import Link from 'next/link';
// import styles from '../../styles/Layout.module.css';
import { FaRegUserCircle } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { FunnelChart } from "recharts";
import { RiLogoutBoxLine } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";

//Dharmil code - modified (7-10-24)

// export default function Header() {
//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>
//         <Link href="/">
//           {/* Replace with your logo image if available */}
//           CDC Portal
//         </Link>
//       </div>
//       <nav>
//         <ul className={styles.navList}>
//           <li>
//             <Link href="/profile">
//               Profile
//             </Link>
//           </li>
//           {/* Add more navigation links as needed */}
//         </ul>
//       </nav>
//     </header>
//   );
// }

//saketh code (updated 7-10-24)
export default function Header(){
  return(
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">
        <img className="max-w-12" src="https://drive.google.com/file/d/1cGK2rC075bLlICcgf5bZlcyZic2Kx79m/view?usp=drive_link"></img>
        CDC-SVNIT 
      </a>
        
        
      
    </div>
    <div className="flex-none gap-2">
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          {/* <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              
          </div> */}
          <PiStudentBold size={30} />
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge"><FaRegUserCircle size={20} /></span>
            </a>
          </li>
          <li>
            <a>Settings
              <span className="badge"><GoGear size={20} /></span>
            </a>
          </li>
          <li>
            <a>Logout
              <span className="badge"><RiLogoutBoxLine size={20}/></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}