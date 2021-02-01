import React, { useState } from 'react'

const keywords = [
    'All',
    'React Js',
    'Angular Js',
    'React Native',
    'use Of Api',
    'Redux',
    'Music',
    'Algorithm Art',
    'Guitar',
    'Bengali Song',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Poor Coder',
    'GatsBy',
    'Shwetabh'
]
const CategoriesBar = () => {
    const [activeElement, setActiveElement] = useState('All')

    const handleClick = value => {
        setActiveElement(value)
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