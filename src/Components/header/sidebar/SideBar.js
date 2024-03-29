import React from 'react'
import { Link } from 'react-router-dom'
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied
} from "react-icons/md";
import { useDispatch } from 'react-redux';
import { log_out } from '../../../redux/actions/auth.action';

const SideBar = ({ sidebar, handleToggleSideBar }) => {

    const dispatch = useDispatch()
    const logOutHandler = () => {
        dispatch(log_out())
    }
    return (
        <>
            <nav className={`sidebar ${sidebar ? 'open' : ''}`}
                onClick={() => handleToggleSideBar(false)}>
                <Link to='/'>
                    <li>
                        <MdHome size={23} />
                        <span>Home</span>
                    </li>
                </Link>

                <Link to='/feed/subscriptions'>
                    <li>
                        <MdSubscriptions size={23} />
                        <span>Subscriptions</span>
                    </li>
                </Link>

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

                <li onClick={logOutHandler}>
                    <MdExitToApp size={23} />
                    <span>LogOut</span>
                </li>
                <hr />
            </nav>
        </>
    )
}

export default SideBar