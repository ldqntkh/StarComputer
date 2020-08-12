<div class="custom-checkout">
    <?php 
        include_once( 'body/header.php' );
        
    ?>
    <div class="content-wrapper clearfix">
        <div id="content-checkout" class="wrapper">
        <?php
            switch( $checkout_step ) {
                case 2:
                    include_once( 'addresses.php' );
                    break;
                case 3:
                    include_once( 'payment.php' );
                    break;
                case 4:
                    include_once( 'thankpage.php' );
                    break;
            }
        ?>
        </div>
    </div>
</div>