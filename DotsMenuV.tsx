import * as React from "react"
import Svg, { G, Circle } from "react-native-svg"

const DotsMenuV = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <G data-name="Group 5719">
      <G data-name="Group 5718" transform="rotate(90 910.995 81.332)">
        <Circle
          data-name="Ellipse 263"
          cx={20}
          cy={20}
          r={20}
          transform="translate(829.663 952.326)"
          fill="#fff"
        />
        <G
          data-name="Group 5717"
          transform="rotate(90 -57.582 913.495)"
          fill="#1a2552"
        >
          <Circle data-name="Ellipse 264" cx={1.25} cy={1.25} r={1.25} />
          <Circle
            data-name="Ellipse 265"
            cx={1.25}
            cy={1.25}
            r={1.25}
            transform="translate(0 5)"
          />
          <Circle
            data-name="Ellipse 266"
            cx={1.25}
            cy={1.25}
            r={1.25}
            transform="translate(0 10)"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default DotsMenuV
