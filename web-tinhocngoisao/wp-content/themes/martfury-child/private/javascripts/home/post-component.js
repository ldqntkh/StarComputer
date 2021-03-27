'use strict';
const $ = jQuery;
const thns_home_ajax= '/wp-admin/admin-ajax.php';
var homePost = {
    init: function () {
        this.itemPostClick();
    },

    itemPostClick: function() {
        $('body').on('click', '.post-cpn-video', function(e) {
            e.preventDefault();
            let postId = $(this).attr('data-post-id');
            try {
                $.ajax({
                    type: 'GET',
                    url: thns_home_ajax,
                    data: {
                        action: 'thns_get_post_content',
                        post_id: postId
                    },
                    beforeSend: function() {
                        // setting a timeout
                        $('body').append(`
                            <div id="popup-post-content"><p class="loading">Đang xử lý</p></div>
                        `);
                    },
                    success: function(data) {
                        $( "#popup-post-content" ).remove();
                        let dataRP = data.data;
                        $('body').append(`
                            <div id="popup-post-content">
                                <div class="post-contents">
                                    <div class="video-content">
                                        <iframe width="100%" height="350" src="https://www.youtube.com/embed/${dataRP.data.video_url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div class="content-body">${dataRP.data.content}</div>
                                </div>
                                <button type="button" id="remove-popup">x</button>
                            </div>
                            
                        `).css({
                            "overflow" : "hidden"
                        });
                        $('body').on('click', '#remove-popup', function() {
                            $( "#popup-post-content" ).remove();
                            $('body').css({
                                "overflow" : "auto"
                            });
                        })
                    },
                    error: function(xhr) { // if error occured
                        // alert("Error occured.please try again");
                        $( "#popup-post-content" ).remove();
                    },
                    complete: function() {
                        
                    }
                });
            } catch (err) {
                console.log(err)
            }
        })
    }
}

module.exports = homePost;