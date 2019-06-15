<?php 

if (!function_exists('findListMenuItemById')):
    function findListMenuItemById($ID, $special_menus, $menus) {
        if (count($special_menus) == 0) return null;
        // for($index = count($special_menus)-1; $index >= 0; $index--) {
        //     $menu_item = $special_menus[$index];
            
        // }
        foreach($special_menus as $menu_item) {
            if ($menu_item->post_status === 'publish' && $menu_item->menu_item_parent === $ID) {
                $slug = $menu_item->url;
                if (strlen($slug) && $slug[strlen($slug) - 1] === '/') $slug = substr($slug, 0, strlen($slug) - 1);
                $slug = explode('/', $slug);
                $slug = $slug[count($slug)- 1];
                $cat = get_term_by( 'slug', $slug, 'product_cat' );
                
                $icon_url = '';
                $background_url = '';

                if ($cat) {
                    $icon_url = get_field('menu_icon', $cat);
                    $background_url = get_field('background_menu', $cat);
                    if (strlen($icon_url) > 0) {
                        $menu_item->icon_url = $icon_url; 
                    }

                    if (strlen($background_url) > 0) {
                        $menu_item->background_url = $background_url; 
                    }
                }
                // findListMenuItemById($menu_item->menu_item_parent,$subArray , $menu_item);
                array_push($menus, $menu_item);
            }
        }
        return $menus;
    }
endif;

if (!function_exists('findListMenuAttributes')):
    function findListMenuAttributes($special_menus) {
        if (count($special_menus) == 0) return null;
        $menus = array();
        foreach($special_menus as $menu_item) {
            if ($menu_item->post_status === 'publish' ) {
                $slug = $menu_item->url;
                if (strlen($slug) && $slug[strlen($slug) - 1] === '/') $slug = substr($slug, 0, strlen($slug) - 1);
                $slug = explode('/', $slug);
                $slug = $slug[count($slug)- 1];
                $cat = get_term_by( 'slug', $slug, 'product_cat' );
                
                $icon_url = '';
                $background_url = '';

                if ($cat) {
                    $icon_url = get_field('menu_icon', $cat);
                    $background_url = get_field('background_menu', $cat);
                    if (strlen($icon_url) > 0) {
                        $menu_item->icon_url = $icon_url; 
                    }

                    if (strlen($background_url) > 0) {
                        $menu_item->background_url = $background_url; 
                    }
                }
                // findListMenuItemById($menu_item->menu_item_parent,$subArray , $menu_item);
                array_push($menus, $menu_item);
            }
        }
        return $menus;
    }
endif;