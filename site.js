

/*!
 * IU Framework Docs JS
 */
(function($, window, document, undefined) {

    $(document).ready(function() {

        Foundation.OffCanvas.defaults.transitionTime = 500;
        Foundation.OffCanvas.defaults.forceTop = false;
        Foundation.OffCanvas.defaults.positiong = 'right';

        //Foundation.Accordion.defaults.multiExpand = true;
        Foundation.Accordion.defaults.allowAllClosed = true;

        // Initialize Foundation
        $(document).foundation();

        var IU = window.IU || {};

        // Delete modules if necessary
        // delete IU.uiModules['accordion'];

        IU.init && IU.init({
            debug: true,
            accordion: {needsMarkup: true},
            share: {
                assetPaths: {
                    shareJs: '/_assets/js/share.js'
                }
            }
        });

        $(".code .show-hide").each(function() {
            var $this = $(this);
            var $code = $this.next('.code-container');

            $code.hide();

            $this.on('click', function(e) {
                e.preventDefault();
                $code.slideToggle();
            });
        });
    });

})(jQuery, window, window.document);