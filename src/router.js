import { createRouter, createWebHistory } from 'vue-router'
import UserPost from './views/UserPost.vue'
import UserPost2 from './views/UserPost2.vue'
import UserGeneric from './views/UserGeneric.vue'
import TableTest from './views/TableTest'
import HtmlTags from "@/views/HtmlTags";
import InnerMenu from "@/views/InnerMenu.vue";

import NotFound from './views/NotFound.vue'


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/users/htmltable/posts/:postId', component: TableTest },
    { path: '/users/htmltag/', component: HtmlTags },
    { path: '/users/htmlinnermanu/', component: InnerMenu },


    { path: '/users/:username/posts/:postId', component: UserPost },
    { path: '/users2/:postId', component: UserPost2 },
    // 모든 것과 매치되며, 값은 `$route.params.pathMatch`에 할당됨.
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    // `/kknd-`로 시작하는 모든 것과 일치하고, 값은 `$route.params.afterUser`에 할당됨.
    { path: '/kknd-:afterUser(.*)', component: UserGeneric },
  ],
})
