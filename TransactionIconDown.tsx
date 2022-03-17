import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const TransactionIconDown = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <G data-name="Group 6841" transform="rotate(180 25 253)">
      <Circle
        data-name="Ellipse 403"
        cx={20}
        cy={20}
        r={20}
        transform="rotate(180 25 253)"
        fill="#fff"
      />
      <G
        data-name="Group 6397-2"
        fill="none"
        stroke="#e40334"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <Path data-name="Path 15214" d="M30.498 479h7.5v7.5" />
        <Path data-name="Line 198" d="m23 494 14.12-14.12" />
      </G>
    </G>
  </Svg>
)

export default TransactionIconDown
