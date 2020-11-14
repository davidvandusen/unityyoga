import CMS from 'netlify-cms-app';

import IndexPagePreview from './preview-templates/IndexPagePreview';
import LayoutPreview from './preview-templates/LayoutPreview';
import MarkdownPagePreview from './preview-templates/MarkdownPagePreview';
import SchedulePagePreview from './preview-templates/SchedulePagePreview';
import TeachersPagePreview from './preview-templates/TeachersPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('intro', MarkdownPagePreview);
CMS.registerPreviewTemplate('layout', LayoutPreview);
CMS.registerPreviewTemplate('schedule', SchedulePagePreview);
CMS.registerPreviewTemplate('teachers', TeachersPagePreview);
