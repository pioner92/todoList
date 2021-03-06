import * as React from "react"
import Svg, {Path} from "react-native-svg"

export const  PenSvg = () => {
    return (
        <Svg width="15px" height="15px" viewBox="0 0 12 11" >
            <Path
                d="M199.108 244.323l.684-.67c.169-.173.256-.348.263-.526.007-.178-.065-.344-.215-.5l-.24-.238c-.15-.155-.315-.226-.495-.212-.18.013-.354.102-.523.266l-.684.67 1.21 1.21zm-9.317 8.354l1.531-.595 7.192-7.178-1.203-1.196-7.185 7.178-.629 1.49c-.032.087-.012.166.058.24.07.072.15.093.236.06z"
                fill="#2B2B2B"
                fillRule="nonzero"
                transform="translate(-189 -242)"
                stroke="none"
                strokeWidth={1}
            />
        </Svg>
    )
}
