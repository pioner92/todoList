import * as React from 'react'
import Svg, {Path} from 'react-native-svg'

export const Profile = () => {
    return (
        <Svg width="26px" height="26px" viewBox="0 0 26 26" >
            <Path
                d="M13 0a5.778 5.778 0 100 11.556A5.778 5.778 0 0013 0zm0 15.889c-4.34 0-13 2.178-13 6.5v2.167C0 25.353.647 26 1.444 26h23.112c.797 0 1.444-.647 1.444-1.444v-2.167c0-4.322-8.66-6.5-13-6.5z"
                transform="translate(-62 -315) translate(62 315)"
                fill="#000"
                fillRule="nonzero"
                stroke="none"
                strokeWidth={1}
            />
        </Svg>
    )
}
