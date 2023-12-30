
import { logoComponent } from './scripts/logo-component.js'
import { onNavPopup, onSidebarPopup } from './scripts/popup.js'

logoComponent('logo-component')
onNavPopup('nav')

if (document.getElementById('details')) {onSidebarPopup('#details')}


