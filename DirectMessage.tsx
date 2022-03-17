import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const DirectMessage = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <G data-name="Group 6402" transform="translate(-697.258 -346.636)">
      <Circle
        data-name="Ellipse 354"
        cx={20}
        cy={20}
        r={20}
        transform="translate(697.258 346.636)"
        fill="#fff"
      />
      <G data-name="Group 6401">
        <Path
          data-name="Path 15216"
          d="M710.258 366.715v5.425a.5.5 0 0 0 .853.38l1.722-1.854a3.861 3.861 0 0 1 2.829-1.262h5.6a4.163 4.163 0 0 0 4-4.308v-2.153a4.163 4.163 0 0 0-4-4.308h-7a4.163 4.163 0 0 0-4 4.308v3.769"
          fill="#fff"
          stroke="#1a2552"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </G>
    </G>
  </Svg>
)

export default DirectMessage
