/*!
=========================================================
File: main.js

Date: 06-Oct-2018 Sat

Author: Yusuf Shakeel
GitHub: https://github.com/yusufshakeel
Website: https://www.yusufshakeel.com

Description: This file contains the custom script for the
             website.

=========================================================
*/
/**
 * Let's put some action.
 */
$(function () {
    /**
     * prevent default
     * using the custom class.
     */
    $(".prevent-default").on("click", function (e) {
        e.preventDefault();
    });

    /**
     * contact form
     */
    $("#contact-form").on("submit", function () {

        /**
         * logic to make AJAX call to some RESTful API
         * goes here...
         */

        return false;
    });

});