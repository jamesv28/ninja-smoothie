<template>
    <nav>
        <div class="nav-wrapper purple darken-1">
            <router-link :to="{name: 'Index'}">
                <span class="brand-logo">
                    {{ title }}
                </span>
            </router-link>
            <button href="" class="btn-floating btn-large halfway-fab waves-effect waves-light light-blue lighten-1" >
                <router-link :to="{name: 'AddSmoothie'}">
                    <i class="material-icons">
                        add
                    </i>
                </router-link>
            </button>
        </div>
    </nav>
    
</template>

<script>

export default {
    name: 'Navbar',
    data() {
        return {
            title: 'Ninja Smoothis'
        }
    }
}
</script>

<style scoped>

</style>