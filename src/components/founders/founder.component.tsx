import React from "react";

interface founderProps {
  avatar: string;
  name: string;
  description: string;
}

export const Founder = ({ avatar, name, description }: founderProps) => {
  return (
    <div className="founder">
      <div className="intro">
        <img src={avatar} alt={name} />
        <h3 className="title mb-12 font-sans name ml-6">{name}</h3>
      </div>
      <p className="mb-8 font-serif leading-7 text-sm md:leading-10 mt-6 leading-loose	">
        {description}
      </p>
    </div>
  );
};
