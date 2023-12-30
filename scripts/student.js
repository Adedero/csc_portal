import { onSidebarPopup } from './popup.js'
import { onImageUpload } from './image-upload.js'

if (document.getElementById('student-course-details')) {onSidebarPopup('#student-course-details')}

onImageUpload('#image', '#select-profile-image', 'input[type="submit"]')
