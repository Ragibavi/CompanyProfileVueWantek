<template>
    <div class="card-blog">
            <img src="https://themesflat.co/html/grabyinsur/images/project/img-08.jpg" alt=""> 
        <div class="card-blog-description">
            <p>1 November 2023</p>
            <h4>
                Blog
            </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nihil sit consequatur ducimus illum. Necessitatibus illo dolorem esse libero, nisi reiciendis eum. Ducimus veritatis saepe labore vel impedit quae sunt?</p>
            <a href="#">Read More</a>
        </div>
    </div>
</template>
<style>
.card-blog {
    display: flex;
    align-items: center;
    text-align: start;
    min-height: 306px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
    border-radius: 60px 0px 0px 0px;
    background: white;
    transition: all 0.5s ease;
    margin: 10px 10px;
}

.card-blog img {
    max-width: 100%;
    height: auto;
}

.card-blog-description {
    padding: 0 20px 20px 20px;
}

.card-blog h4 {
    margin-top: 10px;
    font-weight: 900;
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 0;
    color: #042181;
}

.card-blog a{
    font-weight: 900;
    font-size: 15px;
    text-decoration: none;
    color: #042181;
    cursor: pointer;
    text-transform: capitalize;
}

@media screen and (max-width: 1550px){
    
    .card-blog img {
        width: 65%;
        height: 65%;
}

}
@media screen and (max-width: 1300px){

    .card-blog{
        display: block;
    }
    
    .card-blog img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        height: 50%;

}

}
@media screen and (max-width: 600px){
    
    .card-blog{
        align-items: center;
    }
    .card-blog img {
        width: auto;
        height: auto;
        
}

}
</style>