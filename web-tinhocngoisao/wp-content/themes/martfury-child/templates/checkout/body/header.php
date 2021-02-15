<header id="masthead">
    <div class="wrapper clearfix">
        <div class="site-logo">
            <?php
            if ( function_exists( 'the_custom_logo' ) ) :
                the_custom_logo();
            endif;
            ?>
        </div>
        <div class="checkout-step">
            <div class="progress-checkout">
                <div class="row bs-wizard">
                    <div class="bs-wizard-step bs-wizard-step-1 <?php if ($step == 1) echo 'active'; ?>">
                        <div class="text-center bs-wizard-stepnum">
                            <span>Đặt hàng</span>
                        </div>
                        <div class="progress">
                            <div class="progress-bar-right"></div>
                            <span class="bs-wizard-dot">1</span>
                        </div>
                    </div>

                    <div class="bs-wizard-step bs-wizard-step-2 <?php if ($step == 2) echo 'active'; else if ($step < 2) echo 'disabled'; ?>">
                        <div class="text-center bs-wizard-stepnum">
                            <span class="hidden-xs">Địa Chỉ Giao Hàng</span>
                        </div>
                        <div class="progress">
                            <div class="progress-bar-left"></div>
                            <div class="progress-bar-right"></div>
                            <span class="bs-wizard-dot">2</span>
                        </div>
                    </div>

                    <div class="bs-wizard-step bs-wizard-step-3 <?php if ($step == 3) echo 'active'; else if ($step < 3) echo 'disabled'; ?>">
                        <div class="text-center bs-wizard-stepnum">
                            <span class="hidden-xs">Thanh Toán &amp; Đặt Mua</span>
                        </div>
                        <div class="progress">
                            <div class="progress-bar-left"></div>
                            <div class="progress-bar-right"></div>
                            <span class="bs-wizard-dot">3</span>
                        </div>
                    </div>

                    <div class="bs-wizard-step bs-wizard-step-4 <?php if ($step == 4) echo 'active'; else if ($step < 4) echo 'disabled'; ?>">
                        <div class="text-center bs-wizard-stepnum">
                            <span class="hidden-xs">Hoàn tất đặt hàng</span>
                        </div>
                        <div class="progress">
                            <div class="progress-bar-left"></div>
                            <span class="bs-wizard-dot">4</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="hot-line"></div>
    </div>
</header>