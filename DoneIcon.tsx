import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const DoneIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} {...props}>
    <G data-name="Group 6660" transform="translate(-829.662 -951.861)">
      <Circle
        data-name="Ellipse 252"
        cx={25}
        cy={25}
        r={25}
        transform="translate(829.662 951.861)"
        fill="#0857e0"
      />
      <G data-name="Group 5516">
        <Path
          data-name="Path 1927"
          d="M851.424 984.965a1.243 1.243 0 0 1-.879-.364l-6.219-6.223a1.243 1.243 0 0 1 1.759-1.758l5.339 5.343 11.552-11.559a1.243 1.243 0 0 1 1.759 1.758l-12.436 12.439a1.243 1.243 0 0 1-.875.364Z"
          fill="#fff"
        />
      </G>
    </G>
  </Svg>
)

export default DoneIcon
