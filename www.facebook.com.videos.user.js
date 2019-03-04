// ==UserScript==
// @name         Facebook | Videos
// @namespace    https://www.facebook.com/
// @noframes
// @version      0.1
// @description  Facebook | www.facebook.com | Videos
// @author       oleh.kyshlyan
// @match        http://www.facebook.com/*/videos/*
// @match        https://www.facebook.com/*/videos/*
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @grant        none
// ==/UserScript==

var FacebookVideos = new function(){

  this.loginBanner = function(){
    // removes login banner
    var loginBannerInclosure = function(){
      var loginBanner = document.getElementById('u_0_c');
      if(loginBanner != null){
        loginBanner.style.display = "none";
      }
    }
    setTimeout(loginBannerInclosure,2000);
  }

  this.shareActionLink = function(){
    var shareActionLinkInclosure = function(){
      var shareActionLink = jQuery("A[class*='share_action_link']");
      if(shareActionLink.length == 1){
        var el3399 = shareActionLink.parent().parent().parent().parent().parent("DIV[class*='_3399']");
        if(el3399.length == 1){
          el3399.hide();
        }
      }
    }
    setTimeout(shareActionLinkInclosure,2300);
  }

  // id 'pagelet_rhc_footer' element
  this.pageletRhcFooter = function(){
    var pgletRhcFtrInclosure = function(){
      var pageletRhcFooter = document.getElementById('pagelet_rhc_footer');
      if(pageletRhcFooter != null){
        var pgRhcFtrParEl = pageletRhcFooter.parentElement;
        if(pgRhcFtrParEl != null){
          var pgRhcFtrParElStyle = pgRhcFtrParEl.getAttribute('style');
          jQuery(window).on('scroll',function(){
            var pgRhcFtrParElScrolledStyle = pgRhcFtrParEl.getAttribute('style');
            if(pgRhcFtrParElScrolledStyle.indexOf('position: absolute;') == -1){
              pgRhcFtrParEl.setAttribute('style',pgRhcFtrParElStyle);
            }
          });
        }

        var pgRhcFtrPrevEl = pageletRhcFooter.previousElementSibling;
        var el45mq = pageletRhcFooter.children[0];
        if(el45mq != null){
          el45mq.style.marginTop = '0px';
        }
      }
    }
    setTimeout(pgletRhcFtrInclosure,2000);
  }

  this.videoPermalinkRelatedPagelet = function(){
    var vidPermalinkRltPgltInclosure = function(){
      var videoPermalinkRelatedPagelet = document.getElementById('video_permalink_related_pagelet');
      if(videoPermalinkRelatedPagelet != null){
        var u0i = videoPermalinkRelatedPagelet.parentElement;
        u0i.style.display = 'none';
      }
    }
    setTimeout(vidPermalinkRltPgltInclosure,2000);
  }

}

FacebookVideos.loginBanner();
FacebookVideos.shareActionLink();
FacebookVideos.pageletRhcFooter();
FacebookVideos.videoPermalinkRelatedPagelet();
