import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const AgainstIconActive = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <G data-name="Group 6438" transform="translate(-203.5 -483.5)">
      <Circle
        data-name="Ellipse 356"
        cx={20}
        cy={20}
        r={20}
        transform="translate(203.5 483.5)"
        fill="#e40334"
      />
      <G
        data-name="Group 6437"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={2.5}
      >
        <Path data-name="Line 207" d="m217.843 509.157 11.314-11.314" />
        <Path data-name="Line 208" d="m217.843 497.843 11.314 11.314" />
      </G>
    </G>
  </Svg>
)

export default AgainstIconActive
