/**
 * Created by abeom on 11/4/2016.
 */
$( function() {
$('.has-drop').on('mouseover', function(){
$(this).find('.mm-drop').css('display', 'block');
});
    $('.has-drop').on('mouseleave', function(){
        $(this).find('.mm-drop').css('display', 'none');
    });
    $(document).on('click', 'a', function(e){
        e.preventDefault();
    });
});