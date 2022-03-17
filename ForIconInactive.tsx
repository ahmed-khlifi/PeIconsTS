import * as React from "react"
import Svg, { G, Circle } from "react-native-svg"

const ForIconInactive = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <G data-name="Group 6439" transform="translate(-133.5 -483.5)">
      <G
        data-name="Ellipse 272"
        transform="translate(133.5 483.5)"
        fill="#fff"
        stroke="#f6f6f6"
      >
        <Circle cx={20} cy={20} r={20} stroke="none" />
        <Circle cx={20} cy={20} r={19.5} fill="none" />
      </G>
      <Circle
        data-name="Ellipse 354"
        cx={8}
        cy={8}
        r={8}
        transform="translate(145.5 495.5)"
        fill="none"
        stroke="#1a2552"
        strokeLinecap="round"
        strokeWidth={2.5}
      />
    </G>
  </Svg>
)

export default ForIconInactive
