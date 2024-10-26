import { shallowMount } from '@vue/test-utils';
import MySelect from '@/components/UI/MySelect.vue';

test('should emit selected sort option', async () => {
    // Arrange
    const options = [{ value: 'title', name: 'По названию' }];
    const wrapper = shallowMount(MySelect, { props: { options, modelValue: '' } });

    // Act
    await wrapper.find('select').setValue('title');

    // Assert
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe('title');
});