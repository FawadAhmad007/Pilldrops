import React from 'react'
import { SvgXml } from 'react-native-svg'

const CrossIcon = () => {
    const icon = () => {
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
        <path d="M5.61523 3.5H6.11523V3H6.61523V2H5.61523V2.5H5.11523V3H4.11523V2.5H3.61523V2H2.61523V3H3.11523V3.5H3.61523V4.5H3.11523V5H2.61523V6H3.61523V5.5H4.11523V5H5.11523V5.5H5.61523V6H6.61523V5H6.11523V4.5H5.61523V3.5ZM8.11523 0H1.11523V0.5H0.615234V7.5H1.11523V8H8.11523V7.5H8.61523V0.5H8.11523V0ZM1.61523 7V1H7.61523V7H1.61523Z" fill="#FB1001"/>
      </svg>`
        return xml;
    }
    return (
        <SvgXml xml={icon()} />
    )
}

export default CrossIcon