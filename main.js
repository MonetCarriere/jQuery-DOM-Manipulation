
$(document).ready(() => {
 
    $(document).on('click','.sectionHeader',function(){
        let whitespace = $(this).attr('whitespace');
        $('.whitespace').removeClass('active');
        $('#'+whitespace).addClass('active');
    });

})



