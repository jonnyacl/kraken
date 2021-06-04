import React, { MouseEventHandler } from 'react';

type SidebarProps = {
  showSidebar: boolean,
  onClick: MouseEventHandler<HTMLDivElement>,
};

const SidebarSelector = ({ showSidebar, onClick }: SidebarProps) => {
  if (showSidebar) {
    return (
      <div className="sidebar" onClick={onClick}>
        X
      </div>
    );
  }
  return (
    <div className="sidebar" onClick={onClick}>
      <div className="clicker"></div>
      <div className="clicker"></div>
      <div className="clicker"></div>
    </div>
  );
}

export default SidebarSelector;
