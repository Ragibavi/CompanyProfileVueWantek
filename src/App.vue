<template>
  <Navbar></Navbar>
  
  <div class="container">
    <beranda></beranda>
    <service></service>
    <portfolio></portfolio>
    <blog></blog>
  </div>
</template>

<script>
import Navbar from '@/components/layouts/Navbar.vue'
import Beranda from '@/components/beranda/Beranda.vue'
import Service from "@/components/beranda/Service.vue"
import Portfolio from '@/components/beranda/Portfolio.vue'
import Blog from '@/components/beranda/Blog.vue'
export default{
  components: {
    Navbar,
    Beranda,
    Service,
    Portfolio,
    Blog,

  }
}
</script>