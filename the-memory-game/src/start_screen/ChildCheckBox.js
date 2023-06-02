import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";

/*
ISSUE: 
The 3 Checkboxes dont render whenever i click on one.

when i click an option the rest should be disselected.

*/
const initialCheckBoxStates = [
  { id: "1", name: "Easy", selected: false },
  { id: "2", name: "Medium", selected: false },
  { id: "3", name: "Hard", selected: false },
];

const ChildCheckBox = () => {
  const [diffs, setDiff] = useState(initialCheckBoxStates);

  const handleChange = (id) => {
    let newLevels = diffs.slice();
    console.log(newLevels);
    // Set id to !selected
    newLevels.map((element) => (element.selected = element.id === id));

    // Set New Levels
    setDiff(newLevels);
  };

  console.log("Rendered");

  return (
    <div>
      {diffs.map((element, index) => {
        return (
          <FormControlLabel
            control={<Checkbox checked={element.selected} />}
            label={element.name}
            id={element.id}
            key={index}
            onChange={(event) => {
              handleChange(element.id);
            }}
          />
        );
      })}
    </div>
  );
};

export default ChildCheckBox;