import React from 'react'
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied
} from "react-icons/md";

const SideBar = ({ sidebar, handleToggleSideBar }) => {
    return (
        <>
            <nav className={`sidebar ${sidebar ? 'open' : ''}`}
                onClick={() => handleToggleSideBar(false)}>
                <li>
                    <MdHome size={23} />
                    <span>Home</span>
                </li>
                <li>
                    <MdSubscriptions size={23} />
                    <span>Subscriptions</span>
                </li>
                <li>
                    <MdThumbUp size={23} />
                    <span>Liked Videos</span>
                </li>
                <li>
                    <MdHistory size={23} />
                    <span>History</span>
                </li>
                <li>
                    <MdLibraryBooks size={23} />
                    <span>Library</span>
                </li>
                <li>
                    <MdSentimentDissatisfied size={23} />
                    <span>I don't Know</span>
                </li>

                <hr />

                <li>
                    <MdExitToApp size={23} />
                    <span>LogOut</span>
                </li>
                <hr />
            </nav>
        </>
    )
}

export default SideBar