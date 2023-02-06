<template>
  <h1>Vue 최신 커밋</h1>
  <template v-for="branch in branches" :key="branch">
    <input type="radio"
           :id="branch"
           :value="branch"
           name="branch"
           v-model="currentBranch">
    <label :for="branch">{{ branch }}</label>
  </template>
  <p>vuejs/vue@{{currentBranch}}</p>
  <ul>
    <li v-for="{html_url, sha, author, commit } in commits" :key="sha">
      <a :href="html_url" target="_blank" class="commit">{{sha.slice(0, 7)}}</a>
      - <span class="message">{{ truncate(commit.message) }}</span><br>
      by <span class="author">
      <a :href="author.html_url" target="_blank">{{commit.author.name}}</a>
    </span>
      at <span class="date">{{ formatDate(commit.author.date) }}</span>
    </li>
  </ul>


</template>

<script>

  const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`

export default {
  name: 'DataBring',
  // data: () => ({
  //   branches: ['main', 'v2-compat'],
  //   currentBranch: 'main',
  //   commits: null
  // }),
  data(){
    return{
      branches: ['main', 'v2-compat'],
      currentBranch: 'main',
      commits: null
    }
  },

  created() {
    this.fetchData()
  },

  watch:{
      currentBranch: 'fetchData'
  },

  methods:{
    async fetchData(){
      const url = `${API_URL}${this.currentBranch}`
      this.commits = await (await fetch(url)).json()
    },
    truncate(v){
      const newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate(v){
      return v.replace(/T|Z/g, ' ')
    }

  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    text-decoration: none;
    color: #42b883;
  }
  li {
    line-height: 1.5em;
    margin-bottom: 20px;
  }
  .author,
  .date {
    font-weight: bold;
  }

</style>
