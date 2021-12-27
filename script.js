function showDailyDef(){

    $.getJSON('data.json', (data)=>{
        let titles = $('.title');

        let time = $('.time');
        let prev = $('.prev-time');

        $.each(data, (i, data) => {
            titles[i].innerHTML = `${data.title} <img src="/images/icon-ellipsis.svg" alt="">`;

            time[i].innerHTML = `${data.timeframes.daily.current}hr`;
            prev[i].innerHTML = `${data.timeframes.daily.previous}hrs`;
        })
    })
}

showDailyDef();

$('.btn').on('click', function(){
    $('.btn').removeClass('active');
    $(this).addClass('active');

    $.getJSON('data.json', (data)=> {
        let btnVal = $(this).val();

        let time = $('.time');
        let prev = $('.prev-time');

        $.each(data, (i, data) => {
            
            if (btnVal === 'daily'){
                time[i].innerHTML = `${data.timeframes.daily.current}hr`;
                prev[i].innerHTML = `${data.timeframes.daily.previous}hrs`;
            }
            else if(btnVal === 'weekly'){
                time[i].innerHTML = `${data.timeframes.weekly.current}hr`;
                prev[i].innerHTML = `${data.timeframes.weekly.previous}hrs`;
            }
            else if(btnVal === 'monthly'){
                time[i].innerHTML = `${data.timeframes.monthly.current}hr`;
                prev[i].innerHTML = `${data.timeframes.monthly.previous}hrs`;
            }
        })
    })
})
