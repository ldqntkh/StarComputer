<?php 

    if (!empty($attributes)) {
        foreach($attributes as $attribute) {
            $_FilterWidget = new WC_Widget_Layered_Custom();
            $_FilterWidget->renderFilter($attribute, 'mobile');
            $_FilterWidget = null;
        }
    }
    $rating_Filter->renderRattingFilterMobile();

    if (!empty(the_widget( 'WC_Widget_Price_Filter'))) {
        the_widget( 'WC_Widget_Price_Filter');
    }
?>