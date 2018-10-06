<div class="custom-checkout">
    <?php 
        include_once( 'body/header.php' );
        
    ?>
    <div class="content-wrapper clearfix">
        <div id="content-checkout" class="wrapper">
        <?php
            switch($step) {
                case 1: // login
                    include_once( 'body/login.php' );
                    break;
                case 2: // address
                    include_once( 'body/address.php' );
                    break;
                case 3: // payment
                    include_once( 'body/login.php' );
                    break;
                case 4: // thank page
                    include_once( 'body/login.php' );
                    break;
            }
        ?>
        </div>
    </div>
</div>