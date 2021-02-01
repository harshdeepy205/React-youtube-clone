import React from 'react'
import { AiFillEye } from "react-icons/ai";

const Video = () => {
    return (
        <>
            <div className="video">
                <div className="video__top">
                    <img src="https://i.ytimg.com/vi/Ip_jOSpThSg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKaI2dG8XLYru0ZD70S3mziGyBig" alt="" />
                    <span>5:43</span>
                </div>
                <div className="video__title">
                    React JS Roadmap for Developers helpfull for freshers
                </div>
                <div className="video__details">
                    <span>
                        <AiFillEye /> 5m Views •
                    </span>
                    <span>5 days ago</span>
                </div>
                <div className="video__channel">
                    <img src="https://yt3.ggpht.com/ytc/AAUvwnhzN4GyOzPtFT_oTtOOj9nKkY8FnrLI-DgpjwzYnw=s68-c-k-c0x00ffffff-no-rj" alt="" />
                    <p>Adrian Twarog</p>
                </div>
            </div>
        </>
    )
}

export default Video