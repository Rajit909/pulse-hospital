import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa'; // You can use any icon library
import { ImProfile } from 'react-icons/im';
import { IoIosLogOut } from 'react-icons/io';
import { API_END_POINT_LOGOUT } from '../api/Global';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const DropDown = ({user}) => {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    console.log("user in dropdown",user)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = async () => {
        // Add your logout functionality here
        try {
            const response = await fetch(`${API_END_POINT_LOGOUT}`, {
                method: "GET",
                credentials: "include",
            });
            const data = await response.json();
            console.log(data);
            if (data.success) {
                toast.success(data.message, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                  });
                  navigate("/admin/signin");
            }else{
                toast.error(data.message, {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                  });
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            })
        }
    };

    return (
        <div className="relative">
            {/* Profile Icon */}
            <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 focus:outline-none"
            >
                <FaUserCircle size={35} className="text-2xl text-gray-200 hover:text-gray-300" />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-darkbg border border-gray-200 rounded-md shadow-lg">
                    <ul className="py-1">
                        <li>
                            <a
                                href="/profile"
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 hover:text-gray-900"
                            >
                             <span className=' text-purple-700'> Welcome back</span> <span className=' uppercase font-semibold text-gray-700 dark:text-gray-100 dark:hover:text-gray-900'>{user ? user[0].fullname : "User"}</span>
                            </a> 
                        </li>
                        <li>
                            <a
                                href="/settings"
                                className="flex items-center gap-1 px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100"
                            >
                                <ImProfile size={18}/>
                                Profile
                            </a>
                        </li>
                        <li>
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-1 w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100"
                            >
                                <IoIosLogOut size={20}/>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropDown;
