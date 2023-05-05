import {defineComponent} from 'vue'
// sda
export default defineComponent({
  name: 'button',
  setup(props, {slots}) {
    return () => <button class={`py-2 
      px-4 
      font-semibold 
      rounded-lg 
      shadow-md 
      text-white 
      bg-green-500 
      hover:bg-green-700 
      border-none 
      cursor-pointer` }>{slots.default ? slots.default() : '222'}</button>
  }
})