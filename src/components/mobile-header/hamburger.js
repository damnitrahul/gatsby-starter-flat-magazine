import React, {useState} from 'react'

function Hamburger({toggle, hamIconActive}) {
  const [ham, setHam] = useState(false)
  return (
    <div onClick={toggle} role="button">
      <svg
        className={`ham hamRotate180 ham5 ${hamIconActive && 'active'}`}
        viewBox="5 5 90 90"
        width="35"
        onClick={() => setHam(!ham)}
        style={{display: 'block'}}
        fill="red"
      >
        <path
          class="line top"
          d="m 30,33 h 40 c 0,0 8.5,-0.68551 8.5,10.375 0,8.292653 -6.122707,9.002293 -8.5,6.625 l -11.071429,-11.071429"
        />
        <path class="line middle" d="m 70,50 h -40" />
        <path
          class="line bottom"
          d="m 30,67 h 40 c 0,0 8.5,0.68551 8.5,-10.375 0,-8.292653 -6.122707,-9.002293 -8.5,-6.625 l -11.071429,11.071429"
        />
      </svg>
    </div>
  )
}

export default Hamburger
