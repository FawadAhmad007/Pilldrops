import React from 'react'
import { SvgXml } from 'react-native-svg'

const ChevronIcon = () => {
    const icon = () => {
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="9" height="13" viewBox="0 0 9 13" fill="none">
        <path d="M7.5161 12.0185L1.4407 6.49997L7.55072 1.0186" stroke="white" stroke-width="1.14369" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`
        return xml;
    }
    return (
        <SvgXml xml={icon()} />
    )
}

export default ChevronIcon