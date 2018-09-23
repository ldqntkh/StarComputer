$(function() {
    $(document).on('click', 'span.show-more', function() {
        var $parent = $(this).parent();
        $parent.toggleClass('toggle-height');
        $(this).toggleClass('toggle-content');
    });
});