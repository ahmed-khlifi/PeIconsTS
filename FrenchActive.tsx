import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function FrenchActive(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={61}
      height={61}
      viewBox="0 0 61 61"
      {...props}
    >
      <G data-name="Group 5413">
        <G data-name="Group 5410" transform="translate(.5 .5)">
          <Circle
            data-name="Ellipse 21"
            cx={30}
            cy={30}
            r={30}
            fill="#0857e0"
            stroke="#f3f4f5"
            strokeMiterlimit={10}
            strokeWidth={1}
          />
          <Path
            data-name="Path 11"
            d="M2.312-14.12v2.688h-7.128V-6.9H.9v2.6h-5.716v7.124H-8.2V-14.12zm5.664 6.192a5.562 5.562 0 011.968-2 5.228 5.228 0 012.736-.732v3.62h-.98q-3.72 0-3.72 3.456v6.408H4.592v-13.3h3.384z"
            transform="translate(27.76 35.648)"
            fill="#fff"
          />
        </G>
      </G>
    </Svg>
  )
}

export default FrenchActive
