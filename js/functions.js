$(document).ready(function(){ 
    
    if ($(window).width() <= 1024) {
        // Autoplay on videos
        $('.video').remove();
    }

    $(".loader div span").animate({
        height: "95%"
    }, 2000, function() {

    });
    $.urlParam = function (name) {
        var results = new RegExp("[?&]" + name).exec(window.location.search);
        return results !== null ? name || 0 : false;
    };
    var donation_view = $.urlParam("donation");
    var packs_view = $.urlParam("packs");
    
    $(window).on("load", function () {
        $(".loader div span").animate({
            height: "100%"
        }, 500, function() {
            $('.loader').fadeOut();

            if ($(window).width() > 1024) {
                wow = new WOW({});
                wow.init();

                // Bg Music
                $('#bgmusic').prop("volume", 0.15);
            }
            $(".main").onepage_scroll({
                sectionContainer: "section",
                direction: "vertical",
                easing: "cubic-bezier(0.42,0,0.58,1)",
                animationTime: 600,
                pagination: true,
                updateURL: false,
                responsiveFallback: 1024 
            });
            if (donation_view == "donation") {
                $(".onepage-wrapper").moveTo(6);
            }
            if (packs_view == "packs") {
                $(".onepage-wrapper").moveTo(7);
            }
            //$(".onepage-wrapper").moveTo(7);
        });
    });

    window.addEventListener("load",function() {
        setTimeout(function(){
            // This hides the address bar:
            window.scrollTo(0, 1);
        }, 0);

    });

    if ($(window).width() > 768) {
        $(".slider-chronicle li:first-child").addClass('active');

        // Chronicle Slider
        $(".slider-chronicle li").hover(function() {
            var sliderMediaCurrent = $(this).attr('rel');
            var sliderMedia = $('.slider-media-content > div');
            var sliderMediaSize = sliderMedia.width();
            var sliderMediaPosition = sliderMediaSize * (sliderMediaCurrent - 1);

            $('.slider-chronicle li').removeClass('active');
            $(this).addClass('active');

            sliderMedia.each(function() {
                $(this).removeClass('active');
                $(this).css('transform', 'translateX(-'+ sliderMediaPosition +'px)');

                if ($(this).attr('data-media') == sliderMediaCurrent) {
                    $(this).addClass('active');
                }
            });
        });
    }
    // Packs
    $(document).on('click', '.banner-packs', function() {
        $(".onepage-wrapper").moveTo(7);
    });
    if ($(window).width() < 1024) {
        $(document).on('click', '.packlist li .more', function() {
            $(this).parent().parent().addClass('active');
        });
    }

    // Onepage navs
    $(document).on('click', '.nav01', function() {
        $(".onepage-wrapper").moveTo(1);
    });
    $(document).on('click', '.nav02', function() {
        $(".onepage-wrapper").moveTo(2);
    });
    $(document).on('click', '.nav03', function() {
        $(".onepage-wrapper").moveTo(3);
    });
    $(document).on('click', '.nav04', function() {
        $(".onepage-wrapper").moveTo(4);
    });
    $(document).on('click', '.nav05', function() {
        $(".onepage-wrapper").moveTo(5);
    });
    $(document).on('click', '.nav06', function() {
        $(".onepage-wrapper").moveTo(6);
    });
    $(document).on('click', '.nav07', function() {
        $(".onepage-wrapper").moveTo(7);
    });

    $(document).on('click', '.bg-music button', function() {
        if ($(this).hasClass('playing')) {
            var playing = true;
        }

        if (playing) {
            $(this).removeClass('playing');
            $('#bgmusic')[0].pause();
        }
        else {
            $(this).addClass('playing');
            $('#bgmusic').prop("volume", 0.15);
            $('#bgmusic')[0].play();
        }
    });

    // Donate Box
    $(document).on('click', '.donate-options li', function() {
        $('.donate-options li').removeClass('active').addClass('inactive');
        $(this).removeClass('inactive').addClass('active');
    });

    // Modals
    $(document).on('click', '.modal.terms .close', function() {
        $('.modal.terms').remove();
    });
    $(document).on('click', '.modal.trailer .close', function() {
        $('.modal.trailer').remove();
    });

    $(document).on('keyup', function(e) {
        if (e.key == "Escape") {
            $('.modal.terms').remove();
            $('.modal.trailer').remove();
        }
    });
    $(document).on('click', '.open-modal', function() {
        $('body').append(`<div class="modal terms"> <div class="content"> <button class="close"> </svg> </button> <div class="text-content"> </div></div></div>`);

        if ($(this).hasClass('modal-terms')) {
            $('.modal .text-content').load('terms.html');
        }
        else if ($(this).hasClass('modal-privacy')) {
            $('.modal .text-content').load('privacy.html');
        }
        
    });
    $(document).on('click', '.modal-media', function() {
        var videoUrl = $(this).attr('data-video');
        $('body').append('<div class="modal trailer"> <div class="content"> <button class="close"> </button> <div class="video-content"> <iframe src="https://www.youtube.com/embed/'+ videoUrl +'?modestbranding=1&autohide=1&showinfo=0&controls=0" frameborder="0" allow="autoplay;" allowfullscreen></iframe> </div></div></div>');
    });

    // Donate boxes
    $(document).on('click', '.donate-box ul li .btn', function() {
        if ($(this).hasClass('btn-select')) {
            clicked = $(this).attr('rel');

            $('.donate-box ul li').each(function() {
                if($(this).attr('data-item') !== clicked) {
                    $(this).hide();
                }
                else {
                    $(this).find('.btn-select').hide();
                    $(this).find('.btn-close').show();
                }
            });
            $('.donate-content').each(function() {
                if($(this).hasClass(clicked)) {
                    $(this).show();
                }
            });
        }
        if ($(this).hasClass('btn-close')) {
            $('.donate-box ul li').each(function() {
                $(this).show();
                $(this).find('.btn-select').show();
                $(this).find('.btn-close').hide();
            });
            $('.donate-content').hide();
        }
    
    });

    // Features slider
    $(document).on('click', '.slider-nav li', function() {
        if (!$(this).hasClass('active')) {
            var clicked = $(this).attr('data-slide');
            var videoUrl = $(this).attr('data-video');
            $('.features').attr('rel', clicked);

            $('.slider-nav li').removeClass('active');
            $(this).addClass('active');

            $('.data-slide'+ clicked).addClass('animated fadeInUp');

            if (videoUrl !== null && videoUrl !== '' && videoUrl !== undefined) {
                $('.slider-img').html('<a class="play animated videoReveal" href="'+ videoUrl +'" target="_blank"></a><img class="animated videoReveal" src="./img/img_game' + clicked + '.webp" alt="">');
            }
            else {
                $('.slider-img').html('<img class="animated videoReveal" src="./img/img_game' + clicked + '.webp" alt="">');
            }
        }
    });

    // Lore Slider
    $(document).on('click', '.lore-slider-nav', function() {
        var currentSlider = $('.lore-slider').attr('rel');
        var sliderItems = $('.lore-slider ul li').length;
        var sliderItemSize = $('.lore-slider ul li:not(.active)').width();

        // Next
        if ($(this).hasClass('right')) {
            if (currentSlider < sliderItems) {
                currentSlider++;
            }
        }
        // Prev
        else {
            if (currentSlider > 1) {
                currentSlider--;
            }
        }

        // Disable Buttons
        if (currentSlider == 1) {
            $('.lore-slider-nav.left').prop('disabled', true);
        }
        else {
            $('.lore-slider-nav.left').prop('disabled', false);
        }
        if (currentSlider == sliderItems) {
            $('.lore-slider-nav.right').prop('disabled', true);
        }
        else {
            $('.lore-slider-nav.right').prop('disabled', false);
        }

        $('.lore-slider ul li').removeClass('active');
        $('.lore-slider ul li:nth-child('+currentSlider+')').addClass('active');

        $('.lore-slider').attr('rel', currentSlider);

        $('.lore-slider ul li').css('transform', 'translateX(-'+ (currentSlider - 1) * sliderItemSize +'px)');
    });
    
    // Crusader Slider
    $(document).on('click', '.crusader-slider-nav li', function() {
        var clicked = $(this).attr("data-slide");
        sliderChange(clicked);
    });

    function sliderChange(sliderPos) {
        var currentSlider = $('.crusader-slider').attr('rel');
        var clicked = sliderPos;

        $('.crusader-slider-nav li').each(function() {
            if ($(this).attr('data-slide') == clicked) {
                $(this).addClass('active');
            }
            else {
                $(this).removeClass('active');
            }
        });

        $('.crusader-slider').attr('rel', clicked);
        $('.crusader-slider li').removeClass('active');
        $('.crusader-slider li:nth-child('+clicked+')').addClass('active');
        $('.crusader-slider li:nth-child('+clicked+') img').addClass('animated videoReveal');
        $('.crusader-slider li:nth-child('+clicked+') div').addClass('animated fadeInUp');
    }

    // Switch method
	$("#donation_method").change(function() {
		var method_selected = $(this).val();
		$('.payment-box').hide();
		$('.' + method_selected).show();
	});
    // Switch pack select option
    $(document).on('click', '.buynow', function() {
        var clicked = $(this).attr('id');

        $('.payment-box select option[class="'+clicked+'"]').prop('selected', true);
    });

    jQuery.event.special.touchstart = {
        setup: function( _, ns, handle ) {
            this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
        }
    };
    jQuery.event.special.touchmove = {
        setup: function( _, ns, handle ) {
            this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
        }
    };
    jQuery.event.special.wheel = {
        setup: function( _, ns, handle ){
            this.addEventListener("wheel", handle, { passive: true });
        }
    };
    jQuery.event.special.mousewheel = {
        setup: function( _, ns, handle ){
            this.addEventListener("mousewheel", handle, { passive: true });
        }
    };

    const baseURL = window.location.origin == 'http://127.0.0.1' ? 'http://127.0.0.1/warthrone-website' :  window.location.origin

    const validateGmailEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase()) && email.toLowerCase().endsWith('@gmail.com');
    }

    const validateGenericEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const unlockButtonAndClearMessage = platform => {
        $('.button-' + platform).css('cursor', 'pointer');
        $('.button-' + platform + '-donation').css('cursor', 'pointer');
        $('.alert-box').html('<div class="alert"><span class="trn" data-trn-key="alert_paymentpage">You will be redirected to the payment page. The price is in</span> ' + (platform === 'kassa' ? 'Rubles' : 'Euros') + '.</div>');
    }

    $('.account_field, .amount_field, .email_field').on('keyup', function () {
        unlockButtonAndClearMessage($(this).attr('data-platform'))
    })

    $(document).on('click', '.buycheck', function (event) {
        //event.preventDefault();
        switch(this.id)
        {
            case 'modal-pack1':
                $( "[name*='pg_price']" ).val(12.99);
                $( "[name*='amountf']" ).val(12.99);
                break;
            case 'modal-pack2':
                $( "[name*='pg_price']" ).val(19.99);
                $( "[name*='amountf']" ).val(19.99);
                break;
            case 'modal-pack3':
                $( "[name*='pg_price']" ).val(29.99);
                $( "[name*='amountf']" ).val(29.99);
                break;
        }
    });

    $(document).on('click', '.button-enot', function (event) {
        event.preventDefault();
        if($(this).css('cursor') != 'no-drop') {
            $(this).css('cursor', 'no-drop')
            if($('#account_name_enot').val() == '' || $('#account_name_enot').val() == undefined || $('#donation_value_enot').val() == '' || $('#donation_value_enot').val() == undefined || !validateGmailEmail($('#account_name_enot').val())) {
                $('.alert-box').html('<div class="alert error trn" data-trn-key="alert_gmail">A valid <i><b>gmail.com</b></i> account must be filled!</div>');
                event.preventDefault();
            } else {
                $('.alert-box').html('<div class="alert success trn" data-trn-key="alert_redirecting">Redirecting to the payment page.</div>');
                $.ajax({
                    type: 'post',
                    url: baseURL + "/enot/URLGenerator.php",
                    data: {account: $('#account_name_enot').val() + ';packwarthrone', sum: $('#donation_value_enot').val()},
                    success: function (response) {
                        $('.alert').removeClass('success').removeClass('warning').removeClass('error').html('');
                        window.location = response
                    },
                    error: function (response) {
                        console.log(response);
                        $('.alert-box').html('<div class="alert error trn" data-trn-key="alert_erroroccured">An error occured, payments cannot be processed at this time. Retry later or contact an administrator.</div>');
                    }
                });
            }
        } else {
            event.preventDefault();
            // Prevent spam and multi click
        }
    });

    $(document).on('click', '.button-enot-donation', function (event) {
        event.preventDefault();
        if($(this).css('cursor') != 'no-drop') {
            $(this).css('cursor', 'no-drop')
            if($('#account_name_enot_donation').val() == '' || $('#account_name_enot_donation').val() == undefined || $('#donation_value_enot_donation').val() == '' || $('#donation_value_enot_donation').val() == undefined) {
                $('.alert-box-donation').html('<div class="alert error trn" data-trn-key="alert_validaccount">A valid account must be filled!</div>');
                event.preventDefault();
            } else {
                $('.alert-box-donation').html('<div class="alert warning trn" data-trn-key="alert_checkingaccount">Checking account name...</div>');
                $.ajax({
                    type: 'post',
                    url: baseURL + "/common/CheckAcc.php",
                    data: {accNameCheck: $('#account_name_enot_donation').val()},
                    success: function (response) {
                        if (response == 'ok') {
                            $('.alert-box-donation').html('<div class="alert success trn" data-trn-key="alert_redirecting">Redirecting to the payment page.</div>');
                            $.ajax({
                                type: 'post',
                                url: baseURL + "/enot/URLGenerator.php",
                                data: {account: $('#account_name_enot_donation').val() + ';s2warthrone', sum: $('#donation_value_enot_donation').val()},
                                success: function (response) {
                                    window.location = response
                                },
                                error: function (response) {
                                    console.log(response);
                                    $('.alert-box-donation').html('<div class="alert error trn" data-trn-key="alert_erroroccured">An error occured, payments cannot be processed at this time. Retry later or contact an administrator.</div>');
                                }
                            });
                        } else {
                            $('.alert-box-donation').html('<div class="alert error trn" data-trn-key="alert_account">Account not found!</div>');
                        }
                    },
                    error: function (response) {
                        console.log(response);
                        $('.alert-box').html('<div class="alert error trn" data-trn-key="alert_erroroccured">An error occured, payments cannot be processed at this time. Retry later or contact an administrator.</div>');
                    }
                });
            }
        } else {
            event.preventDefault();
            // Prevent spam and multi click
        }
    });
    // Primepayments
    $(document).on('click', '.button-primepayments', function (event) {
        event.preventDefault();
        if($(this).css('cursor') != 'no-drop') {
            $(this).css('cursor', 'no-drop')
            if($('#account_name_primepayments').val() == '' || $('#account_name_primepayments').val() == undefined || $('#donation_value_primepayments').val() == '' || $('#donation_value_primepayments').val() == undefined || !validateGmailEmail($('#account_name_primepayments').val())) {
                $('.alert-box').html('<div class="alert error trn" data-trn-key="alert_gmail">A valid <i><b>gmail.com</b></i> account must be filled!</div>');
                event.preventDefault();
            } else {
                $('.alert-box').html('<div class="alert success trn" data-trn-key="alert_redirecting">Redirecting to the payment page.</div>');
                $.ajax({
                    type: 'post',
                    url: baseURL + "/primepayments/URLGenerator.php",
                    data: {account: $('#account_name_primepayments').val() + ';packwarthrone', sum: $('#donation_value_primepayments').val(), email: $('#account_name_primepayments').val()},
                    success: function (response) {
                        $('.alert').removeClass('success').removeClass('warning').removeClass('error').html('')
                        window.location = response
                    },
                    error: function (response) {
                        console.log(response);
                        $('.alert-box').html('<div class="alert error trn" data-trn-key="alert_erroroccured">An error occured, payments cannot be processed at this time. Retry later or contact an administrator.</div>');
                    }
                });
            }
        } else {
            event.preventDefault();
            // Prevent spam and multi click
        }
    });
    $(document).on('click', '.button-primepayments-donation', function (event) {
        event.preventDefault();
        if($(this).css('cursor') != 'no-drop') {
            $(this).css('cursor', 'no-drop')
            if($('#account_name_primepayments_donation').val() == '' || $('#account_name_primepayments_donation').val() == undefined || $('#donation_value_primepayments_donation').val() == '' || $('#donation_value_primepayments_donation').val() == undefined || !validateGenericEmail($('#email_name_primepayments_donation').val())) {
                $('.alert-box-donation').html('<div class="alert error trn" data-trn-key="alert_validaccountemail">A valid account & email must be filled!</div>');
                event.preventDefault();
            } else {
                $('.alert-box-donation').html('<div class="alert warning trn" data-trn-key="alert_checkingaccount">Checking account name...</div>');
                $.ajax({
                    type: 'post',
                    url: baseURL + "/common/CheckAcc.php",
                    data: {accNameCheck: $('#account_name_primepayments_donation').val()},
                    success: function (response) {
                        if (response == 'ok') {
                            $('.alert-box-donation').html('<div class="alert success trn" data-trn-key="alert_redirecting">Redirecting to the payment page.</div>');
                            $.ajax({
                                type: 'post',
                                url: baseURL + "/primepayments/URLGenerator.php",
                                data: {account: $('#account_name_primepayments_donation').val() + ';s2warthrone', sum: $('#donation_value_primepayments_donation').val(), email: $('#email_name_primepayments_donation').val()},
                                success: function (response) {
                                    if(response == 'An error has occurred') {
                                        $('.alert-box-donation').html('<div class="alert error trn" data-trn-key="alert_erroroccured">An error occured, payments cannot be processed at this time. Retry later or contact an administrator.</div>');
                                    } else {
                                        window.location = response
                                    }
                                },
                                error: function (response) {
                                    console.log(response);
                                    $('.alert-box-donation').html('<div class="alert error trn" data-trn-key="alert_erroroccured">An error occured, payments cannot be processed at this time. Retry later or contact an administrator.</div>');
                                }
                            });
                        } else {
                            $('.alert-box-donation').html('<div class="alert error trn" data-trn-key="alert_account">Account not found!</div>');
                        }
                    },
                    error: function (response) {
                        console.log(response);
                        $('.alert-box-donation').html('<div class="alert error trn" data-trn-key="alert_erroroccured">An error occured, payments cannot be processed at this time. Retry later or contact an administrator.</div>');
                    }
                });
            }
        } else {
            event.preventDefault();
            // Prevent spam and multi click
        }
    });

    

    // CoinPayments
    $(document).on('click', '.button-coinpayments', function (event) {
        event.preventDefault();
        if($(this).css('cursor') != 'no-drop') {
            $(this).css('cursor', 'no-drop')
            if($('#account_name_coinpayments').val() == '' || $('#account_name_coinpayments').val() == undefined || $('#donation_value_coinpayments').val() == '' || $('#donation_value_coinpayments').val() == undefined || !validateGmailEmail($('#account_name_coinpayments').val())) {
                $('.alert-box').html('<div class="alert error trn" data-trn-key="alert_gmail">A valid <i><b>gmail.com</b></i> account must be filled!</div>');
            } else {
                $('.alert-box').html('<div class="alert success trn" data-trn-key="alert_redirecting">Redirecting to the payment page.</div>');
                $('#account_name_coinpayments').val($('#account_name_coinpayments').val() + ';packwarthrone');
                $("[name='form_coinpayments']").submit();
            }
        } else {
            // Prevent spam and multi click
        }
    });
    $(document).on('click', '.button-coinpayments-donation', function (event) {
        event.preventDefault();
        if($(this).css('cursor') != 'no-drop') {
            $(this).css('cursor', 'no-drop')
            if($('#account_name_coinpayments_donation').val() == '' || $('#account_name_coinpayments_donation').val() == undefined || $('#donation_value_coinpayments_donation').val() == '' || $('#donation_value_coinpayments_donation').val() == undefined) {
                $('.alert-box-donation').html('<div class="alert error trn" data-trn-key="alert_validaccount">A valid account must be filled!</div>');
            } else {
                $('.alert-box-donation').html('<div class="alert warning trn" data-trn-key="alert_checkingaccount">Checking account name...</div>');
                $.ajax({
                    type: 'post',
                    url: baseURL + "/common/CheckAcc.php",
                    data: {accNameCheck: $('#account_name_coinpayments_donation').val()},
                    success: function (response) {
                        if (response == 'ok') {
                            $('.alert-box-donation').html('<div class="alert success trn" data-trn-key="alert_redirecting">Redirecting to the payment page.</div>');
                            $('#account_name_coinpayments_donation').val($('#account_name_coinpayments_donation').val() + ';s2warthrone');
                            $("[name='form_coinpayments_donation']").submit();
                        } else {
                            $('.alert-box-donation').html('<div class="alert error trn" data-trn-key="alert_account">Account not found!</div>');
                        }
                    },
                    error: function (response) {
                        console.log(response);
                        $('.alert-box-donation').html('<div class="alert error trn" data-trn-key="alert_erroroccured">An error occured, payments cannot be processed at this time. Retry later or contact an administrator.</div>');
                    }
                });
            }
        } else {
            // Prevent spam and multi click
        }
    });

    $(document).on('click', '.button-paygol', function (event) {
        event.preventDefault();
        if($(this).css('cursor') != 'no-drop') {
            $(this).css('cursor', 'no-drop')
            if($('#account_name_paygol').val() == '' || $('#account_name_paygol').val() == undefined || $('#donation_value_paygol').val() == '' || $('#donation_value_paygol').val() == undefined || !validateGmailEmail($('#account_name_paygol').val())) {
                $('.alert-box').html('<div class="alert error trn" data-trn-key="alert_gmail">A valid <i><b>gmail.com</b></i> account must be filled!</div>');
            } else {
                $('.alert-box').html('<div class="alert success trn" data-trn-key="alert_redirecting">Redirecting to the payment page.</div>');
                $('#account_name_paygol').val($('#account_name_paygol').val() + ';packwarthrone');
                $("[name='form_paygol']").submit();
            }
        } else {
            // Prevent spam and multi click
        }
    });

    $(document).on('click', '.button-paygol-donation', function (event) {
        event.preventDefault();
        if($(this).css('cursor') != 'no-drop') {
            $(this).css('cursor', 'no-drop')
            if($('#account_name_paygol_donation').val() == '' || $('#account_name_paygol_donation').val() == undefined || $('#donation_value_paygol_donation').val() == '' || $('#donation_value_paygol_donation').val() == undefined) {
                $('.alert-box-donation').html('<div class="alert error trn" data-trn-key="alert_validaccount">A valid account must be filled!</div>');
            } else {
                $('.alert-box-donation').html('<div class="alert warning trn" data-trn-key="alert_checkingaccount">Checking account name...</div>');
                $.ajax({
                    type: 'post',
                    url: baseURL + "/common/CheckAcc.php",
                    data: {accNameCheck: $('#account_name_paygol_donation').val()},
                    success: function (response) {
                        if (response == 'ok') {
                            $('.alert-box-donation').html('<div class="alert success trn" data-trn-key="alert_redirecting">Redirecting to the payment page.</div>');
                            $('#account_name_paygol_donation').val($('#account_name_paygol_donation').val() + ';s2warthrone');
                            $("[name='form_paygol_donation']").submit();
                        } else {
                            $('.alert-box-donation').html('<div class="alert error trn" data-trn-key="alert_account">Account not found!</div>');
                        }
                    },
                    error: function (response) {
                        console.log(response);
                        $('.alert-box-donation').html('<div class="alert error trn" data-trn-key="alert_erroroccured">An error occured, payments cannot be processed at this time. Retry later or contact an administrator.</div>');
                    }
                });
            }
        } else {
            // Prevent spam and multi click
        }
    });

    // PayPalych
    $(document).on('click', '.button-paypalych', function (event) {
        event.preventDefault();
        if($(this).css('cursor') != 'no-drop') {
            $(this).css('cursor', 'no-drop')
            if($('#account_name_paypalych').val() == '' || $('#account_name_paypalych').val() == undefined || $('#donation_value_paypalych').val() == '' || $('#donation_value_paypalych').val() == undefined || !validateGmailEmail($('#account_name_paypalych').val())) {
                $('.alert-box').html('<div class="alert error trn" data-trn-key="alert_gmail">A valid <i><b>gmail.com</b></i> account must be filled!</div>');
                event.preventDefault();
            } else {
                $('.alert-box').html('<div class="alert success trn" data-trn-key="alert_redirecting">Redirecting to the payment page.</div>');
                $.ajax({
                    type: 'post',
                    url: baseURL + "/paypalych/URLGenerator.php",
                    data: {account: $('#account_name_paypalych').val() + ';packwarthrone', sum: $('#donation_value_paypalych').val(), email: $('#account_name_paypalych').val()},
                    success: function (response) {
                        $('.alert').removeClass('success').removeClass('warning').removeClass('error').html('')
                        window.location = response
                    },
                    error: function (response) {
                        console.log(response);
                        $('.alert-box').html('<div class="alert error trn" data-trn-key="alert_erroroccured">An error occured, payments cannot be processed at this time. Retry later or contact an administrator.</div>');
                    }
                });
            }
        } else {
            event.preventDefault();
            // Prevent spam and multi click
        }
    });
    $(document).on('click', '.button-paypalych-donation', function (event) {
        event.preventDefault();
        if($(this).css('cursor') != 'no-drop') {
            $(this).css('cursor', 'no-drop')
            if($('#account_name_paypalych_donation').val() == '' || $('#account_name_paypalych_donation').val() == undefined || $('#donation_value_paypalych_donation').val() == '' || $('#donation_value_paypalych_donation').val() == undefined) {
                $('.alert-box-donation').html('<div class="alert error trn" data-trn-key="alert_validaccountemail">A valid account must be filled!</div>');
                event.preventDefault();
            } else {
                $('.alert-box-donation').html('<div class="alert warning trn" data-trn-key="alert_checkingaccount">Checking account name...</div>');
                $.ajax({
                    type: 'post',
                    url: baseURL + "/common/CheckAcc.php",
                    data: {accNameCheck: $('#account_name_paypalych_donation').val()},
                    success: function (response) {
                        if (response == 'ok') {
                            $('.alert-box-donation').html('<div class="alert success trn" data-trn-key="alert_redirecting">Redirecting to the payment page.</div>');
                            $.ajax({
                                type: 'post',
                                url: baseURL + "/paypalych/URLGenerator.php",
                                data: {account: $('#account_name_paypalych_donation').val() + ';s2warthrone', sum: $('#donation_value_paypalych_donation').val()},
                                success: function (response) {
                                    if(response == 'An error has occurred') {
                                        $('.alert-box-donation').html('<div class="alert error trn" data-trn-key="alert_erroroccured">An error occured, payments cannot be processed at this time. Retry later or contact an administrator.</div>');
                                    } else {
                                        window.location = response
                                    }
                                },
                                error: function (response) {
                                    console.log(response);
                                    $('.alert-box-donation').html('<div class="alert error trn" data-trn-key="alert_erroroccured">An error occured, payments cannot be processed at this time. Retry later or contact an administrator.</div>');
                                }
                            });
                        } else {
                            $('.alert-box-donation').html('<div class="alert error trn" data-trn-key="alert_account">Account not found!</div>');
                        }
                    },
                    error: function (response) {
                        console.log(response);
                        $('.alert-box-donation').html('<div class="alert error trn" data-trn-key="alert_erroroccured">An error occured, payments cannot be processed at this time. Retry later or contact an administrator.</div>');
                    }
                });
            }
        } else {
            event.preventDefault();
            // Prevent spam and multi click
        }
    });
	



});