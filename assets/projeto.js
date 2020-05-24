
function submitFormLogin(dadosDoFormulario) {
    $.ajax({
        url: '/api/login/login',
        data: dadosDoFormulario,
        type: 'POST',
        success: function (data) {
            token = data.token;
            localStorage.setItem('token',token)
            $("#chamadaModal").modal('show');
        },
        error: function (data) {
            $("#chamadaModalErro").modal('show');
        }
    })
}
