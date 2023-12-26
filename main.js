import { showOverlay, hideOverlay } from './public/scripts/loader.js'
import { overlay } from './public/scripts/overlay.js'
import { logoComponent } from './public/scripts/logo-component.js'
import { onNavPopup, onSidebarPopup } from './public/scripts/popup.js'

overlay('overlay')
showOverlay('overlay')
hideOverlay('overlay')
logoComponent('logo-component')
onNavPopup('nav')

if (document.getElementById('details')) {onSidebarPopup('#details')}


