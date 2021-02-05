import React from "react";
import { AiFillEye } from "react-icons/ai";
import moment from "moment";
import numeral from "numeral"
import request from '../../../api';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Col, Row } from "react-bootstrap";

const VideoHorizontal = () => {
    const seconds = moment.duration('100').asSeconds()
    const _duration = moment.utc(seconds * 1000).format("mm:ss")

    return (
        <>
            <Row className="videoHorizontal m-1 py-2 align-align-items-center">
                <Col xs={6} md={4} className="videoHrizontal__left">
                    <LazyLoadImage src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                        effect="blur"
                        className="videoHrizontal__thumbnail"
                        wrapperClassName="videoHrizontal__thumbnail-wrapper"
                    />
                    <span className="videoHrizontal__duration">{_duration}</span>
                </Col>
                <Col xs={6} md={8} className="videoHrizontal__right p-0">
                    <p className="videoHorizontal__title mb-1">
                        Join TYP Quality Content is Here
                    </p>
                    <div className="videoHorizontal__details">

                        <AiFillEye /> {numeral(1000).format("0.a")} Views •
                        {moment('2020-09-09').fromNow()}
                    </div>

                    <div className="videoHorizontal__channel d-flex align-items-center my-1">
                        {/* <LazyLoadImage src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                            effect="blur"
                          
                        /> */}
                        <p>Youtube Clone</p>
                    </div>

                </Col>
            </Row>
        </>
    )
}

export default VideoHorizontal