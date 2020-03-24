<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class StarBrand {

    private $table_name = 'brands';

    private $id;

    private $brand_name;

    private $brand_status;

    private $brand_img;

    private $brand_url;

    private $brand_index;

    public function __construct( $init_data = null ) {
        if ( $init_data != null ) {
            $init_data_json = json_decode( $init_data, true );

            if ( json_last_error() == JSON_ERROR_NONE ) {
                $this->init_data( $init_data_json );
            } 
        }
    }

    private function init_data( $init_data_json ) {
        if ( $init_data_json != null ) {
            $this->id               = empty( $init_data_json['id'] ) ? null : $init_data_json['id'];
            $this->brand_name       = empty( $init_data_json['brand_name'] ) ? null : $init_data_json['brand_name'];
            $this->brand_status     = empty( $init_data_json['brand_status'] ) ? null : $init_data_json['brand_status'];
            $this->brand_img        = empty( $init_data_json['brand_img'] ) ? null : $init_data_json['brand_img'];
            $this->brand_url        = empty( $init_data_json['brand_url'] ) ? null : $init_data_json['brand_url'];
            $this->brand_index      = empty( $init_data_json['brand_index'] ) ? false : $init_data_json['brand_index'];
        }
    }

    public function getBrandByid( $brand_id ) {
        global $wpdb;
        $table_name = $wpdb->prefix . $this->table_name;

        $sql = "select * from $table_name WHERE id = $brand_id";

        $result = $wpdb->get_results( $sql );
            
        return $result;
    }

    public function addNew() {
        global $wpdb;
        $table_name = $wpdb->prefix . $this->table_name;

        $result = $wpdb->insert( $table_name , array( 'brand_name' =>$this->brand_name,
                                                        'brand_status' => $this->brand_status,
                                                        'brand_img' => $this->brand_img,
                                                        'brand_url' => $this->brand_url,
                                                        'brand_index' => $this->brand_index ));
        if( $result ) {
            return $wpdb->insert_id;
        } else return $result;
    }

    public function updateBrand() {
        global $wpdb;
        $table_name = $wpdb->prefix . $this->table_name;

        $result = $wpdb->update( $table_name , array( 'brand_name' =>$this->brand_name,
                                                    'brand_status' => $this->brand_status,
                                                    'brand_img' => $this->brand_img,
                                                    'brand_url' => $this->brand_url,
                                                    'brand_index' => $this->brand_index ), 
                                                array('id' => $this->id ));
        $sql = $wpdb->last_query;
        $error = $wpdb->last_error;
        return $result;
    }

    public function removeBrand( $brand_id ) {
        global $wpdb;
        $table_name = $wpdb->prefix . $this->table_name;
        $result = $wpdb->delete( $table_name , array( 'id' => $brand_id) );
        return $result;
    }

    public function getListBrands( $limit = null, $brand_status = null ) {
        global $wpdb;
        $table_name = $wpdb->prefix . $this->table_name;

        $sql = "select * from $table_name ";

        if ( $brand_status ) {
            $sql .= " where brand_status = $brand_status ";
        }

        $sql .= " ORDER BY brand_index ";

        if ( $limit ) {
            $sql .= " limit 0, $limit ";
        }

        $result = $wpdb->get_results( $sql );
            
        return $result;
    }

    public function getListBrandsHtml( $limit = null, $brand_status = null ) {
        $brands = $this->getListBrands( $limit, $brand_status );
        ob_start();
        foreach( $brands as $brand ) : 
            $image = wp_get_attachment_image_src( $brand->brand_img, 'full' );
            if ( !$image ) {
                $image = esc_js( wc_placeholder_img_src() );
            } else {
                $image = $image[0];
            }
        ?>
            <tr>
                <td scope="col" class="manage-column column-thumb">
                    <img src="<?php echo $image ?>" width="70px" height="37px"/>
                </td>
                <td scope="col" class="manage-column column-thumb colum-action">
                    <p><strong><?php echo $brand->brand_name ?></strong></p>
                    <p class="action">
                        <a href="<?php echo admin_url( 'admin.php?page=star_brands&type=edit&brand_id='.$brand->id) ?>" class="edit-brand" action='edit' data-id="<?php echo $brand->id ?>"><?php _e('Sửa', BRAND_PLUGIN_NAME) ?></a>
                        &nbsp;|&nbsp;
                        <a href="#" class="remove-brand" action='delete' data-title='<?php echo $brand->brand_name ?>' data-id="<?php echo $brand->id ?>"><?php _e('Xóa', BRAND_PLUGIN_NAME) ?></a>
                    </p>
                </td>
                <td scope="col" class="manage-column column-thumb"><?php echo $brand->brand_index ?></td>
                <?php 
                    if ( $brand->brand_status == 1 ) { ?>
                        <td scope="col" class="manage-column column-thumb" style="color: green"><?php _e('Hiển thị', BRAND_PLUGIN_NAME) ?></td>
                    <?php } else { ?>
                        <td scope="col" class="manage-column column-thumb" style="color: red"><?php _e('Ẩn', BRAND_PLUGIN_NAME) ?></td>
                    <?php }
                ?>
                <td scope="col" class="manage-column column-thumb">
                    <a target="_blank" href="<?php echo $brand->brand_url ?>"><?php _e('Liên kết', BRAND_PLUGIN_NAME) ?></a>
                </td>
            </tr>
        <?php endforeach; 

        $content = ob_get_contents();
        ob_clean();
        ob_end_flush();
        return $content;
    }
}