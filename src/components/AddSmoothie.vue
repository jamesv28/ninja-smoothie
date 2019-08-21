<template>
   <div class="add-smoothie container">
        <h1 class="center-align indigo-text page-title">Add New Smoothie Recipe</h1>
        <form @submit.prevent="addSmoothie">
            <div class="field title input-field">
                <label for="title">Title</label>
                <input type="text" id="title" v-model="title">
            </div>
            <div class="field input-field" v-for="(ing, index) in ingredients" :key="index">
                <label for="ingredients">Ingredients</label>
                <input type="text" name="ingredients" v-model="ingredients[index]">
            </div>
            <div class="field ingredients input-field">
                <label for="ingredients">Add Ingredient</label>
                <input type="text" id="ingredients" @keydown.tab.prevent="addIng" v-model="another">
            </div>
            <div class="field center-align">
                <p v-if="feedback" class="pink-text accent-2">{{feedback}}</p>
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
            another: null,
            ingredients: [],
            feedback: null
        }
    },
    methods: {
        addSmoothie() {
            console.log(this.title);
            console.log('hello', this.ingredients)
        },
        addIng() {
            if(this.another) {
                this.ingredients.push(this.another);
                this.another = null;
                this.feedback = null
            } else {
                this.feedback = "you must add an ingredient to a smoothie"
            }
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