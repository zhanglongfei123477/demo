$.ajax('/getList').done(function (res) {
    res.data.forEach(item => {
        $('#list').append(`<li>${item}</li>`)
    })
});
console.log('>>>>>>>', 2);
console.log('111111111111100000000000000');