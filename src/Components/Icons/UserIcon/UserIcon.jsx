import React from 'react'
import { SvgXml } from 'react-native-svg'

const UserIcon = () => {
    const icon = () => {
        const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
        <path d="M6.46995 0C7.26631 0 8.03005 0.263392 8.59316 0.732233C9.15627 1.20107 9.47262 1.83696 9.47262 2.5C9.47262 3.16304 9.15627 3.79893 8.59316 4.26777C8.03005 4.73661 7.26631 5 6.46995 5C5.67359 5 4.90985 4.73661 4.34674 4.26777C3.78363 3.79893 3.46727 3.16304 3.46727 2.5C3.46727 1.83696 3.78363 1.20107 4.34674 0.732233C4.90985 0.263392 5.67359 0 6.46995 0ZM6.46995 6.25C9.78791 6.25 12.4753 7.36875 12.4753 8.75V10H0.4646V8.75C0.4646 7.36875 3.15199 6.25 6.46995 6.25Z" fill="black"/>
      </svg>`
        return xml;
    }
    return (
        <SvgXml xml={icon()} />
    )
}

export default UserIcon