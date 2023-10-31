import React from 'react'
import { SvgXml } from 'react-native-svg'

const AddressIcon = ({ color = "black" }) => {
    const icon = (color) => {
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
        <path d="M0.446777 4.72749V10.6366H3.45415V7.09113H5.86006V10.6366H8.86743V4.72749L4.6571 1.77295L0.446777 4.72749Z" fill="${color}"/>
        <path d="M5.8606 0V1.16409L10.0709 4.11864V4.72727H11.2739V5.90909H10.0709V7.09091H11.2739V8.27273H10.0709V10.6364H13.6798V0H5.8606ZM11.2739 3.54545H10.0709V2.36364H11.2739V3.54545Z" fill="${color}"/>
      </svg>`
        return xml;
    }
    return (
        <SvgXml xml={icon(color)} />
    )
}

export default AddressIcon