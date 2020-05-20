$( ".delete" ).click(function() {
    alert( "Handler for .click() called." );
  });

  $(document).ready(function () {
    $.ajax({
      type: 'GET',
      url: "/api/vendedor",
      dataType: "json",
    }).done(function (data) {

      var atualizaTable = '';
      $.each(data, function (key, value) {
        $.each(value, function (key, value) {
          id = value._id;
          atualizaTable += '<tr>';
          atualizaTable += '<td>' + value.nome + '</td>';
          atualizaTable += '<td>' + value.rg + '</td>';
          atualizaTable += '<td>' + value.email + '</td>';
          atualizaTable += '<td>' + value.totalVendas + '</td>';
          atualizaTable += '<td>' + '<a href="http://www.example.com">' + '<span class="badge  badge-info"">'  + 'Alterar' + '</span>' + '</a>' + ' ' + '<a  class="delete" id=' + id + ' ' + '>' + '<span class="badge  badge-danger">'  + 'Excluir' + '</span>' + '</a>' +'</td>';
          atualizaTable += '</tr>'
        });
        $('#atualizaTable').html(atualizaTable);
      });
    });
  });