import React from 'react';
import Expandable from '../components/Expandable';

type DescriptionProps = {
  text: string
};

const Description = ({ text }: DescriptionProps) => {

  return (
    <div className="App-item-description">
      <div className="heading">Description</div>
      <Expandable element={text} showInitial={false} />
    </div>
  );
}

export default Description;
