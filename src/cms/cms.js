import CMS from 'netlify-cms-app';

import IndexPagePreview from './preview-templates/IndexPagePreview';
import MarkdownPagePreview from './preview-templates/MarkdownPagePreview';
import SchedulePagePreview from './preview-templates/SchedulePagePreview';
import TeacherPagePreview from './preview-templates/TeacherPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('intro', MarkdownPagePreview);
CMS.registerPreviewTemplate('schedule', SchedulePagePreview);
CMS.registerPreviewTemplate('teachers', TeacherPagePreview);
