import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const AgainstIconInactive = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <G data-name="Group 6438">
      <G data-name="Ellipse 356" fill="#fff" stroke="#f6f6f6">
        <Circle cx={20} cy={20} r={20} stroke="none" />
        <Circle cx={20} cy={20} r={19.5} fill="none" />
      </G>
      <G
        data-name="Group 6437"
        fill="none"
        stroke="#1a2552"
        strokeLinecap="round"
        strokeWidth={2.5}
      >
        <Path data-name="Line 207" d="m14.343 25.657 11.314-11.314" />
        <Path data-name="Line 208" d="m14.343 14.343 11.314 11.314" />
      </G>
    </G>
  </Svg>
)

export default AgainstIconInactive
