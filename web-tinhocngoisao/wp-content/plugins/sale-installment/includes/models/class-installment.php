<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Installment {

    private $table_name = 'monthly_installment';

    private $ID;

    private $month;

    private $bank_id;

    private $min_price;

    private $prepaid_percentage;

    private $fee;

    private $docs_require;

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
            $this->ID                       = empty( $init_data_json['ID'] ) ? null : $init_data_json['ID'];
            $this->month                    = empty( $init_data_json['month'] ) ? 3 : $init_data_json['month'];
            $this->bank_id                  = empty( $init_data_json['bank_id'] ) ? null : $init_data_json['bank_id'];
            $this->min_price                = empty( $init_data_json['min_price'] ) ? null : $init_data_json['min_price'];
            $this->prepaid_percentage       = empty( $init_data_json['prepaid_percentage'] ) ? 0 : $init_data_json['prepaid_percentage'];
            $this->fee                      = empty( $init_data_json['fee'] ) ? 0 : $init_data_json['fee'];
            $this->docs_require             = empty( $init_data_json['docs_require'] ) ? null : $init_data_json['docs_require'];
        }
    }


    public function addNew() {
        global $wpdb;
        $table_name = $wpdb->prefix . $this->table_name;

        $result = $wpdb->insert( $table_name , array( 'month' =>$this->month,
                                                        'bank_id' => $this->bank_id,
                                                        'min_price' => $this->min_price,
                                                        'prepaid_percentage' => $this->prepaid_percentage,
                                                        'fee' => $this->fee,
                                                        'docs_require' => $this->docs_require ));
        $sql = $wpdb->last_query;
        
        return $result;
    }
}