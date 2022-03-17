import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const Phone = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} {...props}>
    <G data-name="Group 6642">
      <G data-name="Group 5740" transform="translate(0 .154)">
        <Circle
          data-name="Ellipse 267"
          cx={25}
          cy={25}
          r={25}
          transform="translate(0 -.154)"
          fill="#0857e0"
        />
        <G data-name="Group 5741" transform="translate(17.446 14.331)">
          <G data-name="Group 5740">
            <Path
              data-name="Path 1947"
              d="M10.592 21.184h-6.23a4.366 4.366 0 0 1-4.361-4.362V4.361A4.366 4.366 0 0 1 4.362 0h6.23a4.366 4.366 0 0 1 4.362 4.361v12.461a4.367 4.367 0 0 1-4.362 4.362ZM4.362 2.492a1.871 1.871 0 0 0-1.869 1.869v12.461a1.871 1.871 0 0 0 1.869 1.869h6.23a1.871 1.871 0 0 0 1.869-1.869V4.361a1.871 1.871 0 0 0-1.869-1.869Z"
              fill="#fff"
            />
          </G>
          <Circle
            data-name="Ellipse 268"
            cx={1.5}
            cy={1.5}
            r={1.5}
            transform="translate(5.554 13.515)"
            fill="#fff"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default Phone
