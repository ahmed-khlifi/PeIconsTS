import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const SendMessageIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <G data-name="Group 6582">
      <G data-name="Group 5660" transform="translate(-829.663 -952.326)">
        <Circle
          data-name="Ellipse 259"
          cx={20}
          cy={20}
          r={20}
          transform="translate(829.663 952.326)"
          fill="#fff"
        />
        <G data-name="Group 5659">
          <G data-name="Group 5657">
            <Path
              data-name="Path 1940"
              d="M854.663 980.826h-10a3.5 3.5 0 0 1-3.5-3.5v-10a3.5 3.5 0 0 1 3.5-3.5h5a1 1 0 1 1 0 2h-5a1.5 1.5 0 0 0-1.5 1.5v10a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 0 0 1.5-1.5v-5a1 1 0 0 1 2 0v5a3.5 3.5 0 0 1-3.5 3.5Z"
              fill="#1a2552"
            />
          </G>
          <G data-name="Group 5658">
            <Path
              data-name="Path 1941"
              d="M849.663 973.327a1 1 0 0 1-1-1v-2.5a1 1 0 0 1 .293-.707l7.474-7.474a1 1 0 0 1 1.414 0l2.489 2.49a1 1 0 0 1 0 1.414l-7.482 7.481a1 1 0 0 1-.706.293h-2.482Zm1-3.086v1.085h1.067l6.482-6.482-1.075-1.075Z"
              fill="#1a2552"
            />
          </G>
        </G>
      </G>
    </G>
  </Svg>
)

export default SendMessageIcon
