jQuery(function() {
    jQuery('#print-order-details').on('click', function() {
        var date =  new Date();
        var custom_date = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

        var divToPrint=document.getElementById('modal-priter-order');

        var newWin=window.open('','Print-Window');
      
        newWin.document.open();
      
        newWin.document.write('<html><body onload="window.print()">'+divToPrint.innerHTML.replace('{print_date}', custom_date)+'</body></html>');
      
        newWin.document.close();
      
        setTimeout(function(){newWin.close();},10);
    });
});