import * as $ from 'jquery';
import device from 'current-device';
import mCustomScrollbar from '../../node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';

import '@/css/libs.css';
import '@/css/style.scss';

const tabControl = (fadeComplete, el, parent, tabClass) => {
  if (fadeComplete == true && !el.is('.is-active')) {
    var current = parent.find('.is-active').data('target'),
        next = el.data('target');

    //ставим статус анимации "не закончена"
    fadeComplete = false;
    //скрываем текущий таб
    $(current).fadeOut(300, function () {
      //ставим статус анимации закончена и показываем новый таб
      fadeComplete = true;
      $(next).fadeIn(300);
    });
    //снимаем активный класс с элементов списка
    parent.find(tabClass).removeClass('is-active');
    //добавляем активный класс для текущего элемента списка
    el.addClass('is-active');
  }
}
$(document).ready(function () {
  $('.js-app__slogan-button').click(function (e) {
    e.preventDefault();

    $(this).toggleClass('is-active');
  })

  $('.js-app-panel__item').click(function (e) {
    e.preventDefault();
    var ajaxURL = $(this).data('ajax');

    $('.js-app-panel__item').removeClass('is-active');
    $(this).addClass('is-active');
    $('.js-ajax-body').fadeOut(300, function () {
      $.ajax({
        method: "GET",
        url: ajaxURL,
      }).done(function( response ) {
        $('.js-ajax-body').html(response).fadeIn(300);

        $(".js-custom-scroll").mCustomScrollbar({});

        $('.js-app-tabs__link').click(function (e) {
          e.preventDefault();

          tabControl($(this).closest('.js-app-tabs').data('complete'), $(this), $(this).closest('.js-app-tabs'), '.js-app-tabs__link');
        });
      });
    });
  });

  $(".js-custom-scroll").mCustomScrollbar({});

  $('.js-app-tabs__link').click(function (e) {
    e.preventDefault();

    tabControl($(this).closest('.js-app-tabs').data('complete'), $(this), $(this).closest('.js-app-tabs'), '.js-app-tabs__link');
  });
})