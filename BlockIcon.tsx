import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const BlockIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <G data-name="Group 6685">
      <G data-name="Group 6264" transform="translate(0 .199)">
        <Circle
          data-name="Ellipse 339"
          cx={20}
          cy={20}
          r={20}
          transform="translate(0 -.199)"
          fill="#fff"
        />
        <G data-name="Group 6686" stroke="rgba(26,37,82,0.5)" strokeWidth={2}>
          <G
            data-name="Ellipse 394"
            transform="translate(12.25 12.801)"
            fill="#fff"
          >
            <Circle cx={7.5} cy={7.5} r={7.5} stroke="none" />
            <Circle cx={7.5} cy={7.5} r={6.5} fill="none" />
          </G>
          <Path
            data-name="Line 242"
            fill="none"
            strokeLinecap="round"
            d="m27 13.301-14 14"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default BlockIcon
