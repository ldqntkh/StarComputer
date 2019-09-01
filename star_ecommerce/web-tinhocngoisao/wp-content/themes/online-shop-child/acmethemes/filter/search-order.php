<?php
function custom_filter_order($post_type) {
    if ($post_type === "shop_order") {
?>
    <div style="float:left">
        <input type="hidden" name="range" value="custom" />
        <input type="text" size="11" placeholder="yyyy-mm-dd" value="<?php echo ( ! empty( $_GET['start_date'] ) ) ? esc_attr( wp_unslash( $_GET['start_date'] ) ) : ''; ?>" name="start_date" class="range_datepicker from" autocomplete="off" /><?php //@codingStandardsIgnoreLine ?>
        <span>&ndash;</span>
        <input type="text" size="11" placeholder="yyyy-mm-dd" value="<?php echo ( ! empty( $_GET['end_date'] ) ) ? esc_attr( wp_unslash( $_GET['end_date'] ) ) : ''; ?>" name="end_date" class="range_datepicker to" autocomplete="off" /><?php //@codingStandardsIgnoreLine ?>
        
    </div>
    <select id="order_status" name="order_status" class="wc-enhanced-select">
        <?php
            $statuses = wc_get_order_statuses();
            echo '<option value="">Trạng thái đơn hàng</option>';
            foreach ( $statuses as $status => $status_name ) {
                echo '<option value="' . esc_attr( $status ) . '" ' . selected( $status, $_GET['order_status'], false ) .'">' . esc_html( $status_name ) . '</option>';
            }
        ?>
    </select>
    <script>
        var dates = $( '.range_datepicker' ).datepicker({
            changeMonth: true,
            changeYear: true,
            defaultDate: '',
            dateFormat: 'yy-mm-dd',
            numberOfMonths: 1,
            minDate: '-20Y',
            maxDate: '+1D',
            showButtonPanel: true,
            showOn: 'focus',
            buttonImageOnly: true,
            onSelect: function() {
                var option = $( this ).is( '.from' ) ? 'minDate' : 'maxDate',
                    date   = $( this ).datepicker( 'getDate' );

                dates.not( this ).datepicker( 'option', option, date );
            }
        });
    </script>
<?php
    }
}
add_action('restrict_manage_posts', 'custom_filter_order');


function wpa54142_feed_filter( $query ) {
    global $pagenow;
    if ( $query->is_admin && $pagenow == 'edit.php'  && $_GET['post_type'] == 'shop_order' && ( (isset( $_GET['start_date'] ) && $_GET['start_date'] != '' ) || isset($_GET['order_status'])  )) {
        add_filter( 'posts_where', 'wpa54142_filter_where' );
    }
    return $query;
}
add_filter( 'pre_get_posts', 'wpa54142_feed_filter' );

function wpa54142_filter_where( $where = '' ) {
    $time_start = strtotime($_GET['start_date']);
    $newformat_start = date('Y-m-d',$time_start);

    $time_end = time();

    if ($_GET['end_date']) {
        $time_end = strtotime($_GET['end_date']);
    }
    $newformat_end = date('Y-m-d',$time_end);

    $where .= " AND post_date >= '$newformat_start' AND post_date <= '$newformat_end'";

    if (isset($_GET['order_status']) && $_GET['order_status'] !== '') {
        $status = $_GET['order_status'];
        $where .= " AND post_status = '$status'";
    }

    return $where;
}