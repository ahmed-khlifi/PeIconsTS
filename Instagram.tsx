import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const Instagram = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <G data-name="Group 5619">
      <G data-name="Group 5469">
        <G
          data-name="Ellipse 28"
          transform="rotate(180 20 20)"
          fill="#fff"
          stroke="#f3f4f5"
        >
          <Circle cx={20} cy={20} r={20} stroke="none" />
          <Circle cx={20} cy={20} r={19.5} fill="none" />
        </G>
        <G data-name="Group 4201">
          <G
            data-name="Group 4197"
            fill="#1a2552"
            stroke="#1a2552"
            strokeWidth={0.2}
          >
            <Path
              data-name="Path 1080"
              d="M24.235 14.857a.938.938 0 1 0 .938.938.938.938 0 0 0-.938-.938Z"
            />
            <Path
              data-name="Path 1081"
              d="M20.065 16.06a3.94 3.94 0 1 0 3.94 3.94 3.945 3.945 0 0 0-3.94-3.94Zm0 6.464A2.524 2.524 0 1 1 22.589 20a2.527 2.527 0 0 1-2.524 2.524Z"
            />
            <Path
              data-name="Path 1082"
              d="M23.194 28h-6.389A4.811 4.811 0 0 1 12 23.194v-6.388a4.811 4.811 0 0 1 4.805-4.805h6.388a4.811 4.811 0 0 1 4.806 4.805v6.388A4.811 4.811 0 0 1 23.194 28Zm-6.388-14.495a3.3 3.3 0 0 0-3.3 3.3v6.388a3.3 3.3 0 0 0 3.3 3.3h6.388a3.3 3.3 0 0 0 3.3-3.3v-6.388a3.3 3.3 0 0 0-3.3-3.3Z"
            />
          </G>
        </G>
      </G>
    </G>
  </Svg>
)

export default Instagram
