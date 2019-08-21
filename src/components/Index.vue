<template>
  <div class="row" style="margin-top: 40px;">
    <div class="index container">
      <div class="col sm12 m6" v-for="smoothie in smoothies" :key="smoothie.id">
        <div class="card" >
          <div class="card-content ">
            <button class="delete" @click="deleteSmoothie(smoothie.id)">
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
      this.smoothies = this.smoothies.filter(smoothie => {
        return smoothie.id != id
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
  .delete:active {
    background:none;
  }
  .card {
    height: 250px;
  }
</style>
