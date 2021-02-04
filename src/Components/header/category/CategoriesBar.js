import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getVideosByCategory } from '../../../redux/actions/videosAction'
const keywords = [
    'All',
    'React Js',
    'Angular Js',
    'React Native',
    'use Of Api',
    'Redux',
    'Music',
    'DBMS',
    'Guitar',
    'Data Structure',
    'Coding',
    'Cricket',
    'Football',
    'Clever Programmer',
    'T-series',
    'GatsBy',
    'Shwetabh'
]
const CategoriesBar = () => {
    const [activeElement, setActiveElement] = useState('All')
    const dispatch = useDispatch()
    const handleClick = value => {
        setActiveElement(value);
        dispatch(getVideosByCategory(value))
    }
    return (
        <>
            <div className="CategoriesBar">
                {
                    keywords.map((value, i) => <span
                        onClick={() => handleClick(value)}
                        key={i}
                        className={activeElement === value ? 'active' : ""}>{value}</span>)
                }
            </div>
        </>
    )
}

export default CategoriesBar