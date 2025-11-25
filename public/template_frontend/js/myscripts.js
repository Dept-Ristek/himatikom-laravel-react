$(document).ready(function (){
const flashdata = $('.flash-data').data('flashdata');
const flashnama = $('.flash-data').data('flashnama');
if(flashdata){
    Swal.fire(
        'Daftar Berhasil',
        'Terimakasih '+ flashnama +' telah daftar. <br> Silahkan cek email secara berkala untuk informasi lebih lanjut.',
        'success'
        )
}

    // $('.tombol-daftar').on('click', function(e){
    //     e.preventDefault();
    //     const action = $('form').attr('action');
        
    //     Swal.fire({
    //         title: 'Sudah Yakin Dengan Jawaban?',
    //         text: "Data akan disimpan!",
    //         icon: 'info',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yakin!',
    //         cancelButtonText: 'Tidak!'
    //     }).then((result) => {
    //         if (result.value) {
    //             document.location.href = action;
    //         }
    //     });
    //   });
})