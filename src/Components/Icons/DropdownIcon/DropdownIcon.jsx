import React from 'react'
import { SvgXml } from 'react-native-svg'

const DropdownIcon = ({ rotate = "0deg" }) => {
    const icon = () => {
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M7.99992 1.3335C4.31992 1.3335 1.33325 4.32016 1.33325 8.00016C1.33325 11.6802 4.31992 14.6668 7.99992 14.6668C11.6799 14.6668 14.6666 11.6802 14.6666 8.00016C14.6666 4.32016 11.6799 1.3335 7.99992 1.3335ZM7.99992 9.3335L5.33325 6.66683H10.6666L7.99992 9.3335Z" fill="black"/>
      </svg>`
        return xml;
    }
    return (
        <SvgXml style={{ transform: [{ rotate }] }} xml={icon()} />
    )
}

export default DropdownIcon