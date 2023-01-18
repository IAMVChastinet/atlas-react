import React, { useState, useEffect, useRef } from "react";
import { debounce } from "debounce";

import "./styles.css";

const AtlasPlayground = () => {
  const [value, setValue] = useState("");
  const [isRecomended, setIsRecomended] = useState(false);
  const atlasSearch = useRef(null);

const logValues = debounce((state, ref, event) => {
  console.table({
		event,
    stateValue: state,
    attrValue: ref.current.attributes["value"].value,
    propValue: ref.current.value,
  });
}, 500);

  const clear = () => {
    setValue("");
    logValues(value, atlasSearch, 'Clear');
  };

  useEffect(() => {
    if (isRecomended) {
      atlasSearch.current.value = value;
			logValues(value, atlasSearch, 'Use Effect');
    }
  }),
    [value];

  const updateValue = ({ target }) => {
    setValue(target.value);
    logValues(value, atlasSearch, 'On Input');
  };
  const HandleChange = ({ target }) => setIsRecomended(target.checked);

  return (
    <>
      <h2>Atlas Search</h2>
      <atlas-search
        ref={atlasSearch}
        value={isRecomended ? "" : value }
        onInput={updateValue}
      >
        <atlas-icon slot="prefix" name="search" />
        <atlas-button onClick={clear} slot="suffix" kind="icon">
          <atlas-icon name="close" />
        </atlas-button>
      </atlas-search>
      <p>Value from atlas-search: {value}</p>
      <label>
        <input type="checkbox" onChange={HandleChange} />
        Toggle recomendation
      </label>
    </>
  );
};


const App = () => (
  <>
    <AtlasPlayground></AtlasPlayground>
  </>
);

export default App;
