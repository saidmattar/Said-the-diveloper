'use strict';
var app = app || {};
page('/', app.aboutController.init);
page('/projects', app.projectController.init);
page('/skills', app.skillsController.init);
page('/contact', app.contactController.init);
page();
