/**
 * @file main.js
 * @description Main entry point. Initializes all imported application modules.
 */

import { initTheme } from './modules/theme.js';
import { initNavigation } from './modules/navigation.js';
import { initAnimations } from './modules/animations.js';
import { initForm } from './modules/form.js';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initAnimations();
    initForm();
});
