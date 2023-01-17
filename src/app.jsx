import React, { useState, useRef, useCallback } from 'react';

import './styles.css'

const AtlasPlayground = () => {
	const [value, setValue] = useState('');

	const updateValue = useCallback((e) => {
		setValue(e.target.value);
	}, []);

	const inputRef = useRef();
	const clearValue = useCallback(() => {
		inputRef.current.value = '';
		setValue('');
	}, [inputRef]);

	return (
		<>
			<h2>Atlas Search</h2>
			<atlas-search ref={inputRef} defaultValue={value} onInput={updateValue}>
				<atlas-icon slot="prefix" name="search" />
				<atlas-button onClick={clearValue} slot="suffix" kind="icon">
					<atlas-icon name="close" />
				</atlas-button>
			</atlas-search>
			<p>Value from atlas-search: {value}</p>
		</>
	);
};

export default AtlasPlayground;


const App = () => (
  <>
    <AtlasPlayground></AtlasPlayground>
  </>
);

export default App;
