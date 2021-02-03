import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CategoriesBar from '../../Components/header/category/CategoriesBar'
import Video from '../../Components/header/video/Video'
import { getPopularVideos } from '../../redux/actions/videosAction'


const HomeScreen = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])

    const { videos } = useSelector(state => state.homeVideos)

    return (
        <>
            <Container>
                <CategoriesBar />
                <Row>
                    {videos.map((video) => (
                        <Col lg={3} md={4}>
                            <Video video={video} key={video.dispatch} />
                        </Col>
                    ))

                    }
                </Row>
            </Container>
        </>
    )
}

export default HomeScreen