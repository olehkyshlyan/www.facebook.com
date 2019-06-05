// ==UserScript==
// @name         Facebook | User page
// @namespace    https://www.facebook.com/
// @noframes
// @version      0.1
// @description  Facebook | www.facebook.com | User page
// @author       You
// @match        http://www.facebook.com/*
// @match        https://www.facebook.com/*
// @require      https://code.jquery.com/jquery-3.4.0.min.js
// @grant        none
// ==/UserScript==

var FacebookUserPage = new function(){

  this.loggedOutSignUpDesktop = function(){
    var loggedOutSignUpDesktopInclosure = function(){
      var loggedOutSignUp = jQuery("BODY > DIV[class*='_li'] > DIV#globalContainer DIV#contentArea > DIV[id*='pagelet_timeline'] DIV[class*='timelineLoggedOutSignUp']");
      if(loggedOutSignUp.length == 1){
        loggedOutSignUp.hide();
      }
    }
    setTimeout(loggedOutSignUpDesktopInclosure,2100);
  }

  this.pageletSearch = function(){
    var pageletSearchInclosure = function(){
      jQuery(function(){
        var pageletSearch = jQuery("BODY > DIV[class*='_li'] > DIV#globalContainer DIV#contentArea > DIV[id*='pagelet_timeline'] > DIV[class*='timelineLoggedOut'] > DIV[class*='clearfix'] > DIV[class*='LoggedOutRight'] DIV#pagelet_search");
        if(pageletSearch.length == 1){
          var pgltSrchParent = pageletSearch.parent("DIV[class*='_4-u2']");
          if(pgltSrchParent.length == 1){
            pgltSrchParent.hide();
          }
        }
      });
    }
    setTimeout(pageletSearchInclosure,2100);
  }

  this.pageletPeopleSameName = function(){
    var pageletPeopleSameNameInclosure = function(){
      var pageletPeopleSameName = jQuery("BODY > DIV[class*='_li'] > DIV#globalContainer DIV#contentArea > DIV[id*='pagelet_timeline'] > DIV[class*='timelineLoggedOut'] > DIV[class*='clearfix'] > DIV[class*='LoggedOutRight'] > DIV#pagelet_people_same_name");
      if(pageletPeopleSameName.length == 1){
        pageletPeopleSameName.hide();
      }
    }
    setTimeout(pageletPeopleSameNameInclosure,2200);
  }

}

FacebookUserPage.loggedOutSignUpDesktop();
FacebookUserPage.pageletSearch();
FacebookUserPage.pageletPeopleSameName();
