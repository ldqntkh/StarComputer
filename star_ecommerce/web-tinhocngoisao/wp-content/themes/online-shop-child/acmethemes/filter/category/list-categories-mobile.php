<?php 

    if( !empty($product_categories) ){
        foreach ($product_categories as $key => $category) {?>
            <a href="<?php echo get_category_link($category); ?>" class="category-item">
                <?php echo $category->name ?>
            </a>
        <?php }
    }

?>