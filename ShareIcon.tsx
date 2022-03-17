import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const ShareIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <G data-name="Group 6397" transform="translate(-697.255 -346.613)">
      <Circle
        data-name="Ellipse 352"
        cx={20}
        cy={20}
        r={20}
        transform="translate(697.255 346.613)"
        fill="#fff"
      />
      <G
        data-name="Group 6398"
        fill="none"
        stroke="#1a2552"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path
          data-name="Path 15213"
          d="M725.255 366.113v2.5a5 5 0 0 1-5 5h-5a5 5 0 0 1-5-5v-5a5 5 0 0 1 5-5h2.5"
        />
        <G data-name="Group 6397-2">
          <Path data-name="Path 15214" d="M721.504 358.613h3.751v3.75" />
          <Path data-name="Line 198" d="m717.755 366.113 7.06-7.06" />
        </G>
      </G>
    </G>
  </Svg>
)

export default ShareIcon
