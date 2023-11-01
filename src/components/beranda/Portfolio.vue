<template>
    <div class="portfolio">
        <img src="" alt="">
        <h3>Portfolio Kami</h3>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad delectus facere, ea perspiciatis beatae error itaque odio tenetur adipisci cupiditate illo non iusto vitae debitis. Deleniti expedita molestias reiciendis tenetur?</h6>
        <div class="row_portfolio">
            <card></card>           
            <card></card>           
            <card></card>           
        </div>      
    </div>
</template>

<script>

import Card from '@/components/portfolio/Card.vue'
export default{
    components:{
        Card
    }
}

</script>

<style>

.portfolio{
    margin-top: 80px;
}

.portfolio h6{
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
}

.portfolio h3{
    font-weight: 900;
    font-size: 48px;
    line-height: 35px;
    color: blue;
    margin-bottom: 30px;
    text-align: center;
}

.row_portfolio{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
}

@media screen and (max-width: 600px){
    .row_portfolio{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 10px; 
    }
}
</style>