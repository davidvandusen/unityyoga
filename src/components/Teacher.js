import PreviewCompatibleImage from './PreviewCompatibleImage';
import React from 'react';

const Teacher = ({ teacherName, teacherImage, bioHtml }) => (
  <article className="teacher">
    <h1>{teacherName}</h1>
    <div className="teacher-content">
      <div className="teacher-image">
        <PreviewCompatibleImage alt={teacherName} imageInfo={{ image: teacherImage }} />
      </div>
      <div className="teacher-bio">
        <div dangerouslySetInnerHTML={{ __html: bioHtml }} />
      </div>
    </div>
  </article>
);

export default Teacher;
