<template>
  <div class="row" style="margin-top: 40px;">
    <div class="index container">
      <div class="col sm12 m6" v-for="smoothie in smoothies" :key="smoothie.id">
        <div class="card" >
          <div class="card-content ">
            <button class="delete" @click="deleteSmoothie(smoothie.id)" title="delete">
              <i class="material-icons " >delete</i>
            </button>
            <span class="card-title indigo-text center-align">
              {{ smoothie.title }}
            </span>
            <ul class="ingredients">
              <li v-for="(ing, index) in smoothie.ingredients" :key="index">
                <span class="chip">
                  {{ ing }}
                </span>
              </li>
            </ul>
          </div>
          <button class="btn btn-floating halfway-fab purple accent-2">
              <router-link :to="{name: 'EditSmoothie', params: {smoothie_slug: smoothie.slug}}">
                <i class="material-icons">
                  edit
                </i>
              </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init';

export default {
  name: 'Index',
  data () {
    return {
      smoothies: []
    }
  },
  created() {
    // fetch data from firestore
    db.collection('smoothies').get().then(snapshot => {
      snapshot.forEach(doc => {
        let smoothie = doc.data();
        smoothie.id = doc.id;
        this.smoothies.push(smoothie);
      })
    })
  },
  methods: {
    deleteSmoothie(id) {
      // delete doc from firestore
      db.collection('smoothies').doc(id).delete().then( () => {
        this.smoothies = this.smoothies.filter(smoothie => {
          return smoothie.id != id
        })
      })
    }
  }
}
</script>

<style>
  .ingredients {
    margin-top: 40px;
  }

  .ingredients li {
    display: inline-block;
  }
  
  .chip {
    background-color: #607d8b;
    color: #ffffff;
  }

  .delete {
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
    color: #aaaaaa;
    background: none;
    border: 0;
    font-size: 1.4em;
  }
  .delete:active, .delete:focus {
    background:none !important;
    color: #aaaaaa;
  }
  .card {
    height: 250px;
    margin-bottom: 25px;
  }
</style>
