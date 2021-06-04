import React, { useState } from 'react';

type ExpandableProps = {
  showInitial: boolean,
  element: React.ReactNode | string,
};

const Expandable = ({ element, showInitial }: ExpandableProps) => {

  const [expanded, setExpanded] = useState(showInitial);

  return (
    <div className={expanded ? "expandable" : "expandable-collapsed"}>
      <div>{element}</div>
      <div className="show-more" onClick={() => { setExpanded(!expanded) }}>{expanded ? "Show less" : "Show more"}</div>
    </div>
  );
}

export default Expandable;
