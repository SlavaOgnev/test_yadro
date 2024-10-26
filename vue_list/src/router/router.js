import Main from "@/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage.vue";
import hello from "@/pages/hello.vue";
import PostPageID from "@/pages/PostPageID.vue";
import PosrPageWithSrote from "@/pages/PosrPageWithSrote.vue";

const routers =[
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/hello',
        component: hello
    },
    {
        path: '/posts/:id',
        component: PostPageID
    },
    {
        path: '/postWithName',
        component: PosrPageWithSrote
    }

]

const router = createRouter({
   routes: routers,
    history: createWebHistory(process.env.BASE_URL)
})
export default router