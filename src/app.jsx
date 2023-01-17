import React, { useState, useEffect, useRef } from "react";

import './styles.css'

const AtlasPlayground = () => {
	const [value, setValue] = useState('')
	const atlasSearch = useRef(null)

	const clear = () => setValue('')

	useEffect(() => {
		atlasSearch.current.value = value
  }), [value];

	const updateValue = ({ target }) => setValue(target.value)
	
  return (
    <>
      <h2>Atlas Search</h2>
      <atlas-search ref={atlasSearch} onInput={updateValue}>
        <atlas-icon slot="prefix" name="search" />
        <atlas-button onClick={clear} slot="suffix" kind="icon">
          <atlas-icon name="close" />
        </atlas-button>
      </atlas-search>
			<p>Value from atlas-search: {value}</p>
    </>
  );
};

const App = () => (
  <>
    <AtlasPlayground></AtlasPlayground>
  </>
);

export default App;
