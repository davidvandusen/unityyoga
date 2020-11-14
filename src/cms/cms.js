import CMS from 'netlify-cms-app';

import IndexPagePreview from './preview-templates/IndexPagePreview';
import TeacherPagePreview from './preview-templates/TeacherPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('teacher', TeacherPagePreview);
