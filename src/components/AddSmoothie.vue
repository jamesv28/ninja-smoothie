<template>
   <div class="add-smoothie container">
        <h1 class="center-align indigo-text page-title">Add New Smoothie Recipe</h1>
        <form @submit.prevent="addSmoothie">
            <div class="field title input-field">
                <label for="title">Title</label>
                <input type="text" id="title" v-model="title">
            </div>
            <div class="field ingredients input-field">
                <label for="ingredients">Add Ingredient</label>
                <input type="text" id="ingredients" >
            </div>
            <div class="field center-align">
                <button class="btn pink accent-2 addSmoothie">Add Smoothie</button>
            </div>
        </form>
   </div> 
</template>

<script>
export default {
    name: 'AddSmoothie',
    data() {
        return {
            title: null,

        }
    },
    methods: {
        addSmoothie() {
            console.log(this.title)
        }
    }
}
</script>

<style>
    .page-title {
        font-size: 2.5rem;
        margin-top: 80px;
    }
    .addSmoothie {
        margin-top: 40px;
    }
     /* label focus color */
    .input-field input[type=text]:focus + label {
      color: #8e24aa;
    }
    /* label underline focus color */
    .input-field input[type=text]:focus {
      border-bottom: 1px solid #8e24aa !important;
      box-shadow: 0 1px 0 0 #000;
    }
</style>