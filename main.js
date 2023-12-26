import { showOverlay, hideOverlay } from './src/scripts/loader.js'
import { overlay } from './src/scripts/overlay.js'
import { logoComponent } from './src/scripts/logo-component.js'
import { onNavPopup, onSidebarPopup } from './src/scripts/popup.js'

overlay('overlay')
showOverlay('overlay')
hideOverlay('overlay')
logoComponent('logo-component')
onNavPopup('nav')

if (document.getElementById('details')) {onSidebarPopup('#details')}


