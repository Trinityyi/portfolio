import React from 'react';

const Section = ({
  title,
  htmlContent
}) => {
  return (
    <section className="my-12">
      <h2 className="text-4xl mb-2">{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}/>
    </section>
  );
};

export default Section;
