<template> 

<div class="blog blog-section">
    <h3>Blog</h3>
    <div class="row_blog">
        <card></card>
        <card></card>
    </div>
</div>

</template>

<script>

import '@/assets/blog.css'
import Card from '@/components/blog/Card.vue'

export default{
    components:{
        Card
    }
}

</script>

<style>

.blog{
    margin-top: 80px;
}

.blog h6{
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
}

.blog h3{
    font-weight: 900;
    font-size: 48px;
    line-height: 35px;
    color: blue;
    margin-bottom: 30px;
    text-align: center;
}

.row_blog{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
}

@media screen and (max-width: 900px){
    .row_blog{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 10px; 
    }
}
</style>
