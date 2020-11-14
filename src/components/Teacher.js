import PreviewCompatibleImage from './PreviewCompatibleImage';
import React from 'react';

const Teacher = ({ teacherName, teacherImage, bioHtml, bio }) => (
  <article className="teacher">
    <h1>{teacherName}</h1>
    <div className="teacher-content">
      <div className="teacher-image">
        <PreviewCompatibleImage alt={teacherName} imageInfo={{ image: teacherImage }} />
      </div>
      <div className="teacher-bio">
        {bioHtml ? <div dangerouslySetInnerHTML={{ __html: bioHtml }} /> : bio}
      </div>
    </div>
  </article>
);

export default Teacher;
