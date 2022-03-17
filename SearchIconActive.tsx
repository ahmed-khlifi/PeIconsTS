import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const SearchIconActive = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <G data-name="Group 6663" transform="translate(-101 -834)">
      <Circle
        data-name="Ellipse 313"
        cx={20}
        cy={20}
        r={20}
        transform="translate(101 834)"
        fill="#fff"
      />
      <G data-name="Group 6072">
        <G data-name="Group 6070">
          <Path
            data-name="Path 15135"
            d="M119.929 860.858a7.939 7.939 0 0 1-7.93-7.929 7.939 7.939 0 0 1 7.93-7.929 7.939 7.939 0 0 1 7.93 7.929 7.939 7.939 0 0 1-7.93 7.929Zm0-13.724a5.8 5.8 0 0 0-5.795 5.794 5.8 5.8 0 0 0 5.795 5.795 5.8 5.8 0 0 0 5.794-5.795 5.8 5.8 0 0 0-5.794-5.793Z"
            fill="#0857e0"
          />
        </G>
        <G data-name="Group 6071">
          <Path
            data-name="Path 15136"
            d="M129.005 863.002a1 1 0 0 1-.708-.293l-2.142-2.143a1 1 0 0 1 0-1.414 1 1 0 0 1 1.413 0l2.143 2.143a1 1 0 0 1 0 1.414 1 1 0 0 1-.706.293Z"
            fill="#0857e0"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default SearchIconActive
