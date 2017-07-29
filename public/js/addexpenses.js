$(document).ready(function() {

    //setting Date Picker --@Debottam
    $('body').on('focus', ".datepicker", function() {
        $(this).datepicker();
    })


    var successButton = '<button type="button" class="btn btn-success addRow"><span class="glyphicon glyphicon-plus"></span></button>';
    var removeRowButton = '<button type="button" class="btn btn-danger removerow "><span class="glyphicon glyphicon-minus"></span></button>';

    //Adding Row --@Debottam
    $(document).on('click', '.addRow', function(e) {
        e.preventDefault();

        var rowTobeCopied = $(this).closest('.tr_clone');
        var parentTable = $(this).closest('table');
        var copyingRow = rowTobeCopied.clone();
        rowTobeCopied.after(copyingRow);
        parentTable.find('tr').last().find('#itemNameId').focus();


    });

    //Remving Record --@Debottam
    $(document).on('click', '.removerow', function(e) {

        e.preventDefault();
        var rowToberemoved = $(this).closest('.tr_clone');
        var parentTable = $(this).closest('table');
        var rowCount = parentTable.find('tbody tr').length;
        if (rowCount) {
            if (rowCount === 1) {
                return false;
            }


        }

        rowToberemoved.remove();
        parentTable.find('tr').last().find('#itemNameId').focus();
        console.log('Length of table is ' + parentTable.find('tbody tr').length);


    });


});