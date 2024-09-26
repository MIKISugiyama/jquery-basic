$(function(){
  $('#toggle').on('click', function(){
    $('#target').toggleClass('sample');
  });
  $('#has').on('click', function(){
    if($('#target').hasClass('sample')){
      console.log('sampleクラスがあります');
    }else{
      console.log('sampleクラスがありません')
    }
  });
});