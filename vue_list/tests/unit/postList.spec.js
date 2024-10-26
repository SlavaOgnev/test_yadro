import { shallowMount } from '@vue/test-utils';
import PostList from '@/components/PostList.vue';

test('should delete a post from the list', () => {
    // Arrange
    const posts = [{ id: 1, title: 'Post 1', body: 'Body 1' }, { id: 2, title: 'Post 2', body: 'Body 2' }];
    const wrapper = shallowMount(PostList, { props: { posts } });

    // Act
    wrapper.vm.$emit('deleteItem', posts[0]);

    // Assert
    expect(wrapper.emitted('deleteItem')[0][0].id).toBe(1);
});