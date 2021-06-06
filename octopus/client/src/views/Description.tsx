import React from 'react';

type DescriptionProps = {
  text: string
};

const Description = ({ text }: DescriptionProps) => {

  return (
    <div className="description">
      <div className="heading">Description</div>
      <div className="content">{text}</div>
    </div>
  );
}

export default Description;
