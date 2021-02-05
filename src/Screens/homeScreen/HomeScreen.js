import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CategoriesBar from '../../Components/header/category/CategoriesBar'
import Video from '../../Components/header/video/Video'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videosAction'
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonVideos from '../../Components/header/skeleton/SkeletonVideos'

const HomeScreen = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])

    const { videos, activeCategory, loading } = useSelector(state => state.homeVideos)

    const fetchData = () => {
        if (activeCategory === 'All') {
            dispatch(getPopularVideos())
        }
        else {
            dispatch(getVideosByCategory(activeCategory))
        }
    }

    return (
        <>
            <Container>
                <CategoriesBar />
                <InfiniteScroll
                    dataLength={videos.length}
                    next={fetchData}
                    hasMore={true}
                    loader={
                        <div className="spinner-border text-danger d-block mx-auto">

                        </div>
                    }
                >
                    <Row>

                        {!loading ? videos.map((video) => (
                            <Col lg={3} md={4}>
                                <Video video={video} key={video.dispatch} />
                            </Col>
                        )) : [...Array(20)].map(() => <Col lg={3} md={4}>
                            <SkeletonVideos />
                        </Col>)
                        }

                    </Row>
                </InfiniteScroll>
            </Container>
        </>
    )
}

export default HomeScreen