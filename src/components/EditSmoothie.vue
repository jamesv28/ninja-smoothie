<template>
    <div class="container" v-if="smoothie">
        <h2 class="center-align">Edit: {{ smoothie.title }}</h2>
        <form @submit.prevent="editSmoothie">
            <div class="field title input-field">
                <label for="title">Title</label>
                <input type="text" id="title" v-model="smoothie.title">
            </div>
            <div class="field input-field add-ingredients" v-for="(ing, index) in smoothie.ingredients" :key="index">
                <label for="ingredients">Ingredients</label>
                <input type="text" name="ingredients" v-model="smoothie.ingredients[index]">
                <i class="material-icons deleteIcon" @click="deleteIng(ing)">delete</i>
            </div>
            <div class="field ingredients input-field">
                <label for="ingredients">Add Ingredient</label>
                <input type="text" id="ingredients" @keydown.tab.prevent="addIng" v-model="another">
            </div>
            <div class="field center-align">
                <p v-if="feedback" class="pink-text accent-2">{{feedback}}</p>
                <button class="btn pink accent-2 addSmoothie">Edit Smoothie</button>
            </div>  
        </form>
    </div>
    <div class="container" v-else>
        <p>
            Loading...
        </p>
    </div>
</template>

<script>
import db from '@/firebase/init';

export default {
    name: 'EditSmoothie',
    data() {
        return {
            smoothie: null,
            another: null,
            feedback: null
        }
    },
    methods: {
        editSmoothie() {
            console.log(this.smoothie.ingredients);
        },
        addSmoothie() {
            if(this.title && this.ingredients.length != 0) {
                this.feedback = null;

                // create slug
                this.slug = slugify(this.title, {
                    replacement: '-',
                    remove: /[$*_+~.()'"|\-@:]/g,
                    lower: true
                });

                db.collection('smoothies').add({
                    title: this.title,
                    ingredients: this.ingredients,
                    slug: this.slug
                }).then( () => {
                    this.$router.push({ name: 'Index'})
                }).catch( err => {
                    console.log('err',err);
                })
            } 
            else {
                this.feedback = "you must add smoothie title and at least one ingredient";
            }
        },
        addIng() {
            if(this.another) {
                this.smoothie.ingredients.push(this.another);
                this.another = null;
                this.feedback = null
            } else {
                this.feedback = "you must add an ingredient to a smoothie"
            }
        },
        deleteIng(ing) {
            this.smoothie.ingredients = this.smoothie.ingredients.filter(ingredient => {
                return ingredient != ing
            })
        }
    },
    created() {
        let ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug);
        ref.get().then(snapshot => {
            snapshot.forEach(doc => {
               this.smoothie = doc.data();
               this.smoothie.id = doc.id;
            })
        })
    }
}
</script>

<style>
    input {
        margin-top: 30px !important;
    }

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

    .add-ingredients {
        margin: 20px auto;
        position: relative;
    }

    .deleteIcon {
        position: absolute;
        right: 0;
        bottom: 15px;
        color: #aaaaaa;
        font-size: .43m;
        cursor: pointer;
    }
</style>