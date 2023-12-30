import { showOverlay, hideOverlay } from './scripts/loader.js'
import { overlay } from './scripts/overlay.js'
import { logoComponent } from './scripts/logo-component.js'
import { onNavPopup, onSidebarPopup } from './scripts/popup.js'

overlay('overlay')
showOverlay('overlay')
hideOverlay('overlay')
logoComponent('logo-component')
onNavPopup('nav')

if (document.getElementById('details')) {onSidebarPopup('#details')}


