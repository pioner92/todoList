import * as React from 'react'
import Svg, {Path} from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export const Create = () => {
    return (
        <Svg width="20px" height="29px" viewBox="0 0 29 29" >
            <Path
                d="M258.431 300c.197 0 .352-.022.465-.067.113-.045.248-.132.405-.261l.936-.725.162.147c.232.186.487.3.766.339.35.05.71 0 1.084-.15l4.613-1.954c.167-.07.305-.14.413-.209a2.04 2.04 0 00.339-.283l13.413-13.489c.658-.666.983-1.375.973-2.126-.01-.751-.35-1.47-1.017-2.156l-2.978-3.029c-.668-.686-1.373-1.032-2.115-1.037-.742-.005-1.447.326-2.115.992l-13.413 13.459a4.4 4.4 0 00-.273.328c-.073.1-.15.239-.228.418l-1.946 4.685a2.012 2.012 0 00-.162 1.082c.04.282.151.544.335.785l.097.116-1.965 2.09c-.206.23-.267.46-.184.694.084.234.292.351.627.351h1.768zm19.365-18L274 278.203l.924-.914c.387-.376.755-.385 1.105-.028l2.708 2.722c.36.358.35.729-.027 1.114l-.914.903zm-11.824 12L262 289.975 272.017 280l3.983 4.015L265.972 294zm-4.488 2.997c-.112-.01-.233-.086-.365-.228l-.929-.928c-.203-.203-.243-.442-.122-.716l1.327-3.125 3.605 3.623-3.15 1.314a.814.814 0 01-.366.06zM282.838 304c.314 0 .586-.098.816-.294.23-.196.346-.431.346-.706 0-.275-.115-.51-.346-.706a1.221 1.221 0 00-.816-.294h-26.66c-.325 0-.602.1-.832.3-.23.2-.346.433-.346.7 0 .275.115.51.346.706.23.196.507.294.831.294h26.66z"
                transform="translate(-255 -275)"
                fill="#2B2B2B"
                fillRule="nonzero"
                stroke="none"
                strokeWidth={1}
            />
        </Svg>
    )
}
