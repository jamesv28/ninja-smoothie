<template>
   <footer class="page-footer purple darken-1">
        <div class="container">
            <p>
                {{ name }} &trade;
            </p>    
        </div>   
    </footer> 
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            name: 'Ninja Smoothies'
        }
    }
}
</script>

<style scoped>

    
</style>