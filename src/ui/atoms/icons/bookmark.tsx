import * as React from 'react'
import Svg, {Path} from 'react-native-svg'

export const Bookmark = () => {
    return (
        <Svg width="14px" height="22px" viewBox="0 0 14 22" >
            <Path
                d="M173.533 361.31c.36 0 .644-.114.848-.342.204-.228.306-.547.306-.955v-16.841c0-.933-.238-1.644-.715-2.13-.477-.488-1.178-.731-2.105-.731h-7.644c-.926 0-1.63.243-2.11.73s-.72 1.198-.72 2.13v16.842c0 .408.102.727.306.955.205.228.487.343.848.343.252 0 .486-.08.7-.24.215-.16.533-.445.956-.854l3.75-3.71c.061-.06.123-.06.184 0l3.74 3.71c.43.409.75.693.96.853.212.16.444.24.696.24z"
                fill="#676767"
                fillRule="nonzero"
                transform="translate(-161 -340)"
                stroke="none"
                strokeWidth={1}
            />
        </Svg>
    )
}
