import * as React from 'react'
import Svg, {Path} from 'react-native-svg'

export const LogOut = () => {
    return (
        <Svg width="26px" height="26px" viewBox="0 0 26 26" >
            <Path
                d="M.813 0A1 1 0 000 1v24c0 .55.45 1 1 1h15c.55 0 1-.45 1-1v-5h-2v4H2V2h13v4h2V1c0-.55-.45-1-1-1H.812zm19.843 8.063a.578.578 0 00-.625.593v2.313s-10.25.375-10.468.531c-.32.227-.532.887-.532 1.5 0 .617.211 1.367.531 1.594.22.156 10.47.437 10.47.437v2.313c0 .226.113.426.312.531.199.105.437.094.625-.031 2.422-1.637 4.758-4.36 4.843-4.469A.606.606 0 0025.97 13a.615.615 0 00-.157-.375c-.085-.11-2.421-2.832-4.843-4.469a.597.597 0 00-.313-.094z"
                transform="translate(-92 -315) translate(92 315)"
                fill="#000"
                fillRule="nonzero"
                stroke="none"
                strokeWidth={1}
            />
        </Svg>
    )
}
