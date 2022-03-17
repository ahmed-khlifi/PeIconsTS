import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const StatsIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <G
      data-name="Group 6957"
      transform="translate(-782.226 -399.065)"
      fill="#fff"
    >
      <Circle
        data-name="Ellipse 354"
        cx={20}
        cy={20}
        r={20}
        transform="translate(782.226 399.065)"
      />
      <G
        data-name="Group 6955"
        stroke="#1a2552"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path
          data-name="Path 15214"
          d="M809.742 419.066h0a7.476 7.476 0 0 1-7.477 7.476h-.046a7.476 7.476 0 0 1-7.477-7.476v-.047a7.477 7.477 0 0 1 7.477-7.477h.023"
        />
        <Path
          data-name="Path 15215"
          d="M811.479 419.055v-.028a9.225 9.225 0 0 0-9.224-9.225h0v9.225Z"
        />
      </G>
    </G>
  </Svg>
)

export default StatsIcon
