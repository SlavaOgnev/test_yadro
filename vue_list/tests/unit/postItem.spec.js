import { shallowMount } from '@vue/test-utils';
import Post from '@/components/postItem.vue';
import MyButtom from "@/components/UI/myButtom.vue";

describe('Post.vue', () => {
    let wrapper;
    const postMock = {
        id: 1,
        title: 'Test Title',
        body: 'Test Body',
        isStrikethrough: false,
    };

    beforeEach(() => {
        wrapper = shallowMount(Post, {
            propsData: { post: postMock },
            global: {
                components: {
                    MyButtom,
                },
            },
        });
    });

    it('toggles isStrikethrough when notReal button is clicked', async () => {
        await wrapper.find('.notReal .notReal').trigger('click');
        expect(wrapper.vm.post.isStrikethrough).toBe(true);
        await wrapper.find('.notReal .notReal').trigger('click');
        expect(wrapper.vm.post.isStrikethrough).toBe(false);
    });

});