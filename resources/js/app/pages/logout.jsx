import { useState } from "react";
import { useSelector } from "react-redux";

export default function LogOut({ onLogout }) {
    const [showTooltip, setShowTooltip] = useState(false);
    const { user } = useSelector((state) => state.app)

    return (
        <div className="relative">
            <button
                onClick={() => setShowTooltip(!showTooltip)}
                className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold text-cyan-100 hover:bg-cyan-600 hover:text-white"
            >
                <img
                    alt="User Icon"
                    src="/images/user_icon.png"
                    className="size-8 rounded-full bg-gray-50"
                />
                <span className="sr-only">Your profile</span>
                <span aria-hidden="true">{user?.fname} {user?.lname}</span>
            </button>

            {showTooltip && (
                <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md border border-gray-200">
                    <button
                        onClick={onLogout}
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}
