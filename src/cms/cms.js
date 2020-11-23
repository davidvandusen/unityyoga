import CMS from 'netlify-cms-app';

import IndexPagePreview from './preview-templates/IndexPagePreview';
import LayoutPreview from './preview-templates/LayoutPreview';
import MarkdownPagePreview from './preview-templates/MarkdownPagePreview';
import SchedulePagePreview from './preview-templates/SchedulePagePreview';
import TeamPagePreview from './preview-templates/TeamPagePreview';

CMS.registerPreviewTemplate('basicPages', MarkdownPagePreview);
CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('layout', LayoutPreview);
CMS.registerPreviewTemplate('schedule', SchedulePagePreview);
CMS.registerPreviewTemplate('team', TeamPagePreview);
