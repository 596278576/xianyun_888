import Vue from 'vue'
import RichEditor from '@/components/post/RichEditor'

// register component from plugin to bypass SSR
Vue.component('rich-editor', RichEditor)