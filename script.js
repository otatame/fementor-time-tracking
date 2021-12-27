function showDailyDef(){

    $.getJSON('data.json', (data)=>{
        let titles = document.querySelectorAll('.title');

        $.each(data, (i, data) => {
            titles[i].innerText = `${data.title}`;
        })
    })
}

showDailyDef();

$('.btn').on('click', function(){
    $('.btn').removeClass('active');
    $(this).addClass('active');

})

let valBtn = document.querySelectorAll('.btn');

console.log(valBtn[0].value);