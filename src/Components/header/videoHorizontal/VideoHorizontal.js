import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import moment from "moment";
import numeral from "numeral"
import request from '../../../api';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const VideoHorizontal = ({ video, searchScreen, subScreen }) => {

    const { id, snippet:
        { channelId, channelTitle, description, title, publishedAt, thumbnails: { medium } },
        resourceId
    } = video

    const isVideo = !(id.kind === 'youtube#channel' || subScreen)

    const [views, setViews] = useState(null)
    const [duration, setDuration] = useState(null)
    const [channelIcon, setChannelIcon] = useState(null)

    useEffect(() => {
        const get_video_details = async () => {
            const { data: { items } } = await request('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: id.videoId
                }
            })
            setDuration(items[0].contentDetails.duration);
            setViews(items[0].statistics.viewCount);
        }
        if (isVideo)
            get_video_details()
    }, [id, isVideo])


    useEffect(() => {
        const get_channel_icon = async () => {
            const { data: { items } } = await request('/channel', {
                params: {
                    part: 'snippet',
                    id: channelId
                }
            })
            setChannelIcon(items[0].snippet.thumbnails.default)
        }
        get_channel_icon()
    }, [channelId])



    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format("mm:ss")

    const history = useHistory()

    const _channelId = resourceId?.channelId || channelId

    const handleClick = () => {
        isVideo ?
            history.push(`/watch/${id.videoId}`)
            : history.push(`/channel/${_channelId}`)
    }

    const thumbnail = !isVideo && 'videoHrizontal__thumbnail-channel'

    return (
        <>
            <Row className="videoHrizontal m-1 py-2 align-items-center" onClick={handleClick}>
                <Col xs={6} md={searchScreen || subScreen ? 4 : 6} className="videoHrizontal__left">
                    <LazyLoadImage src={medium.url}
                        effect="blur"
                        className={`videoHrizontal__thumbnail ${thumbnail}`}
                        wrapperClassName="videoHrizontal__thumbnail-wrapper"
                    />
                    {
                        isVideo && (
                            <span className="videoHrizontal__duration">{_duration}</span>
                        )
                    }
                </Col>
                <Col xs={6} md={searchScreen || subScreen ? 8 : 6} className="videoHrizontal__right p-0">
                    <p className="videoHrizontal__title mb-1">
                        {title}
                    </p>

                    {
                        isVideo && (<div className="videoHrizontal__details">
                            <AiFillEye /> {numeral(views).format("0.a")} Views •
                            {moment({ publishedAt }).fromNow()}
                        </div>)
                    }

                    {(searchScreen || subScreen) && <p className="mt-1 videoHrizontal__description">{description}</p>}

                    <div className="videoHrizontal__channel d-flex align-items-center my-1">
                        {isVideo && (
                            <LazyLoadImage src={channelIcon?.url}
                                effect="blur"

                            />
                        )}
                        <p className="mb-0">{channelTitle}</p>
                    </div>
                    {
                        subScreen && (
                            <p className="mt-2">
                                {
                                    video.contentDetails.totalItemCount
                                }{' '}Videos
                            </p>)
                    }
                </Col>
            </Row>
        </>
    )
}

export default VideoHorizontal