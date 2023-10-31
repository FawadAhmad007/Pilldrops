import React from 'react'
import { SvgXml } from 'react-native-svg'

const PaperPlaneIcon = () => {
    const icon = () => {
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
        <path d="M0.644287 2.20312L3.23495 5.60221L9.15091 2.79242L4.75887 7.60167L7.34953 11.0007L12.9305 -0.00123273L0.644287 2.20312Z" fill="white"/>
      </svg>`
        return xml;
    }
    return (
        <SvgXml xml={icon()} />
    )
}

export default PaperPlaneIcon