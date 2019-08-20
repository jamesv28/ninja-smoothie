<template>
  <div class="row" style="margin-top: 40px;">
    <div class="index container">
      <div class="col sm12 m6" v-for="smoothie in smoothies" :key="smoothie.id">
        <div class="card" >
          <div class="card-content ">
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
export default {
  name: 'Index',
  data () {
    return {
      smoothies: [
        {
          title: 'Ninja Brew',
          slug: 'ninja-brew',
          ingredients: ['bananas', 'coffee','milk'],
          id: 1
        },
        {
          title: 'Morning Mood',
          slug: 'morning-mood',
          ingredients: ['mango','lime','juice'],
          id: 2
        }
      ]
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
</style>
