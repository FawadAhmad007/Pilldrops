import React from 'react'
import { SvgXml } from 'react-native-svg'

const PencilIcon = ({ color = "black" }) => {
    const icon = () => {
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
        <path d="M10.7171 4.41361L8.01817 1.77487L9.81216 0L12.4952 2.65445L10.7171 4.41361ZM0.365967 12V9.32984L7.09737 2.67016L9.79628 5.34031L3.06488 12H0.365967Z" fill="${color}"/>
      </svg>`
        return xml;
    }
    return (
        <SvgXml xml={icon(color)} />
    )
}

export default PencilIcon