import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import VideoHorizontal from "../../Components/header/videoHorizontal/VideoHorizontal";
import { getVideosByChannel } from "../../redux/actions/videosAction";


const SubscriptionScreen = () => {


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVideosByChannel())
    }, [dispatch])

    const { loading, videos } = useSelector(state => state.subscriptionsChannel)

    return (
        <>
            <Container fluid>
                {
                    !loading ? videos?.map(video => <VideoHorizontal video={video} key={video.id} subScreen />)
                        : (
                            <SkeletonTheme color="#343a40" highlightColor="#3c4147">
                                <Skeleton width="100%" height={160} count={20} />
                            </SkeletonTheme>
                        )
                }
            </Container>
        </>
    )
}

export default SubscriptionScreen