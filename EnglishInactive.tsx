import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

export default function EnglishInactive(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={61}
      height={61}
      viewBox="0 0 61 61"
      {...props}
    >
      <G data-name="Group 5412">
        <G data-name="Group 5411" transform="translate(.5 .5)">
          <Circle
            data-name="Ellipse 20"
            cx={30}
            cy={30}
            r={30}
            fill="#fff"
            stroke="#f3f4f5"
            strokeMiterlimit={10}
            strokeWidth={1}
          />
          <Path
            data-name="Path 10"
            d="M-7.226-11.432v4.392h6v2.592h-6v4.56h6.72v2.712h-10.1V-14.12h10.1v2.688zm17.136.768a4.708 4.708 0 013.672 1.512A6.108 6.108 0 0114.95-4.9v7.724h-3.36V-4.52a3.472 3.472 0 00-.816-2.46 2.9 2.9 0 00-2.232-.876 2.985 2.985 0 00-2.3.936 3.823 3.823 0 00-.864 2.688v7.056H1.99v-13.3h3.384v2.664a4.236 4.236 0 011.74-2.1 5.172 5.172 0 012.796-.752z"
            transform="translate(27.83 35.648)"
            fill="#1a2552"
          />
        </G>
      </G>
    </Svg>
  )
}
