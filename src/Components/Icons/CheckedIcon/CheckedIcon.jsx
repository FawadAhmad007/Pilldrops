import React from 'react'
import { SvgXml } from 'react-native-svg'

const CheckedIcon = () => {
    const icon = () => {
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M3.40356 4.36518L4.84582 5.80743L8.69182 1.96143" stroke="#169E3A" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.69201 4.846V7.73051C8.69201 7.98551 8.59071 8.23007 8.41039 8.41039C8.23007 8.59071 7.98551 8.69201 7.73051 8.69201H1.9615C1.70649 8.69201 1.46193 8.59071 1.28162 8.41039C1.1013 8.23007 1 7.98551 1 7.73051V1.9615C1 1.70649 1.1013 1.46193 1.28162 1.28162C1.46193 1.1013 1.70649 1 1.9615 1H6.28825" stroke="#169E3A" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`
        return xml;
    }
    return (
        <SvgXml xml={icon()} />
    )
}

export default CheckedIcon