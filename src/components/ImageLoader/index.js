import React from 'react'
import LazyLoad from 'react-lazy-load'

function ImageLoader(props) {
    return <LazyLoad debounce={false} offsetVertical={500}><img src={props.image} alt="product"/></LazyLoad>
}

export default ImageLoader