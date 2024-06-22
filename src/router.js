// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/tugas1',
    name: 'Tugas1',
    beforeEnter() {
      window.open('https://ardhikafacrizsusilo-project-cv.vercel.app/', '_blank');
      router.push('/');
    }
  },
  {
    path: '/tugas2',
    name: 'Tugas2',
    beforeEnter() {
      window.open('https://ardhikafacrizsusilo-223510305-project.vercel.app/', '_blank');
      router.push('/');
    }
  },
  {
    path: '/tugas3',
    name: 'Tugas3',
    beforeEnter() {
      window.open('https://ardhikafacrizsusilo-tugas3-pbk-223510305.vercel.app/', '_blank');
      router.push('/');
    }
  },
  {
    path: '/tugas4',
    name: 'Tugas4',
    beforeEnter() {
      window.open('https://ardhikafacrizsusilo-tugas4-pbk-223510305.vercel.app/', '_blank');
      router.push('/');
    }
  },
  {
    path: '/tugas5',
    name: 'Tugas5',
    beforeEnter() {
      window.open('https://ardhikafacrizsusilo-tugas5-pbk-223510305.vercel.app/', '_blank');
      router.push('/');
    }
  },
  {
    path: '/tugas6',
    name: 'Tugas6',
    beforeEnter() {
      window.open('https://ardhikafacrizsusilo-tugas6-pbk-223510305.vercel.app/', '_blank');
      router.push('/');
    }
  }, 
  {
    path: '/tugas7',
    name: 'Tugas7',
    beforeEnter() {
      window.open('https://ardhikafacrizsusilo-tugas7-pbk-223510305.vercel.app/', '_blank');
      router.push('/');
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
