import { shallowMount } from '@vue/test-utils';
import PostForm from '@/components/postForm.vue';

test('should create post and reset form', async () => {
    // Arrange
    const wrapper = shallowMount(PostForm);
    wrapper.setData({ post: { title: 'Test Title', body: 'Test Body' } });

    // Act
    await wrapper.findComponent({ name: 'my-buttom' }).trigger('click');

    // Assert
    const emittedPost = wrapper.emitted('create')[0][0];
    expect(emittedPost).toEqual({ title: 'Test Title', body: 'Test Body', id: expect.any(Date) });
    expect(wrapper.vm.post.title).toBe('');
    expect(wrapper.vm.post.body).toBe('');
});
