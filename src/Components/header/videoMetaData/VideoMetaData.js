import React from 'react'
import moment from "moment";
import numeral from "numeral"
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from 'react-show-more-text'

const VideoMetaData = () => {
    return (
        <>
            <div className="videoMetaData py-2">
                <div className="videoMetaData__top">
                    <h5>Video Title</h5>
                    <div className="d-flex justify-content-between align-items-center py-1">
                        <span>
                            {numeral(10000).format("0.a")} Views •
                            {moment('2020-06-6').fromNow()}
                        </span>

                        <div>
                            <span className="mr-3">
                                <MdThumbUp size={26} />{numeral(10000).format("0.a")}
                            </span>

                            <span className="mr-3">
                                <MdThumbDown size={26} />{numeral(10000).format("0.a")}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
                    <div className="d-flex">
                        <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt=""
                            className="rounder-circle mr-3" />
                        <div className="d-flex flex-column">
                            <span>Channel Name</span>
                            <span> {numeral(10000).format("0.a")} Subscribers</span>
                        </div>
                    </div>

                    <button className="btn border-0 p-2 m-2">Subscribe</button>
                </div>

                <div className="videoMetaData__description">
                    <ShowMoreText
                        lines={3}
                        more="SHOW MORE"
                        less="SHOW LESS"
                        anchorClass='showMoreText'
                        expanded={false}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ShowMoreText>
                </div>
            </div>
        </>
    )
}

export default VideoMetaData