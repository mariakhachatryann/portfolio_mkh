import { defineStore } from "pinia";
import quizImg from "~/assets/projects/quiz-screen.png";
import tourImg from "~/assets/projects/tour-screen.png";
import weatherImg from "~/assets/projects/weather-nuxt.png";
import editorImg from "~/assets/projects/editor-screen.png";
import html from "~/assets/logo/html.png";
import css from "~/assets/logo/css.png";
import javascript from "~/assets/logo/javascript.png";
import typescript from "~/assets/logo/ts.png";
import vue from "~/assets/logo/vue.png";
import nuxt from "~/assets/logo/nuxt.svg";
import tailwind from "~/assets/logo/tailwind.png";
import git from "~/assets/logo/git.png";
import github from "~/assets/logo/github.png";
import npm from "~/assets/logo/npm.png";
import pinia from "~/assets/logo/pinia.svg";
import vite from "~/assets/logo/vite.png";
import json from "~/assets/logo/json-logo.png";
import sass from "~/assets/logo/sass.svg";
import webpack from "~/assets/logo/webpack.png";
import gulp from "~/assets/logo/gulp.jpg";
import axios from "~/assets/logo/axios.svg";
import php from "~/assets/logo/php.png";
import laravel from "~/assets/logo/laravel.svg";
import yii2 from "~/assets/logo/yii2.png";
import htmlCert from "~/assets/certificates/html-cert.png";
import cssCert from "~/assets/certificates/css-cert.png";
import jsCertSam from "~/assets/certificates/js-cert-sam.png";
import gitCert from "~/assets/certificates/git-cert.jpg";
import jsCert from "~/assets/certificates/js-cert.png";
import responsiveCert from "~/assets/certificates/responsive-cert.png";
import jsInterCert from "~/assets/certificates/jsInter-cert.png";
import webDevCert from "~/assets/certificates/web-dev-cert.png";

export const usePortfolioStore = defineStore("portfolio", () => {
    const projects = ref([
        {
            id: 1,
            title: "Quiz Game",
            description: "A quiz game to test your knowledge in various fields",
            technologies: "Javascript, Vue, Vuex, Vue-Router Tailwind CSS",
            src: quizImg,
            demo: "https://quiz-81t079x8n-mariakhachatryann.vercel.app/#/main",
            code: "https://github.com/mariakhachatryann/quiz",
        },
        {
            id: 2,
            title: "Tour Agency",
            description: "Tour Agency website created with Nuxt 3",
            technologies: "Javascript, Vue, Nuxt, Tailwind CSS",
            src: tourImg,
            demo: "https://tour-page-lovat.vercel.app/",
            code: "https://github.com/mariakhachatryann/tour-page",
        },
        {
            id: 3,
            title: "Weather Forecast",
            description: "Weather forecasr website created with Nuxt",
            technologies: "Nuxt 3",
            src: weatherImg,
            demo: "https://weather-nuxt-red.vercel.app/",
            code: "https://github.com/mariakhachatryann/weather-nuxt",
        },
        {
            id: 4,
            title: "Image Editor",
            description: "Image editor to edit size, colors and other",
            technologies: "Pure Javascript",
            src: editorImg,
            demo: "https://editor-lemon-rho.vercel.app/",
            code: "https://github.com/mariakhachatryann/editor/",
        }
    ]);

    const technologies = ref([
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-400",
        },
        {
            id: 4,
            src: typescript,
            title: "TypeScript",
            style: "shadow-blue-400",
        },
        {
            id: 5,
            src: vue,
            title: "Vue",
            style: "shadow-emerald-500",
        },
        {
            id: 6,
            src: nuxt,
            title: "Nuxt",
            style: "shadow-emerald-700",
        },
        {
            id: 7,
            src: tailwind,
            title: "Tailwind CSS",
            style: "shadow-cyan-700",
        },
        {
            id: 8,
            src: git,
            title: "Git",
            style: "shadow-orange-600",
        },
        {
            id: 9,
            src: github,
            title: "GitHub",
            style: "shadow-white",
        },
        {
            id: 10,
            src: npm,
            title: "NPM",
            style: "shadow-red-600"
        },
        {
            id: 11,
            src: pinia,
            title: "Pinia",
            style: "shadow-yellow-600"
        },
        {
            id: 12,
            src: vite,
            title: "Vite",
            style: "shadow-purple-500"
        },
        {
            id: 13,
            src: json,
            title: "JSON",
            style: "shadow-white"
        },
        {
            id: 14,
            src: sass,
            title: "Sass",
            style: "shadow-pink-500"
        },
        {
            id: 15,
            src: vue,
            title: "VUEX",
            style: "shadow-emerald-500"
        },
        {
            id: 16,
            src: webpack,
            title: "Webpack",
            style: "shadow-blue-500"
        },
        {
            id: 17,
            src: gulp,
            title: "Gulp",
            style: "shadow-red-500"
        },
        {
            id: 18,
            src: axios,
            title: "Axios",
            style: "shadow-blue-800"
        },
        {
            id: 19,
            src: php,
            title: "PHP",
            style: "shadow-blue-800"
        },
        {
            id: 20,
            src: laravel,
            title: "Laravel",
            style: "shadow-red-500"
        },
        {
            id: 21,
            src: yii2,
            title: "YII2",
            style: "shadow-orange-500"
        }
    ]);

    const certificates = ref([
        { id: 1, img: htmlCert },
        { id: 2, img: jsCertSam },
        { id: 3, img: cssCert },
        { id: 4, img: gitCert, otherSize: true },
        { id: 5, img: jsCert },
        { id: 6, img: responsiveCert },
        { id: 7, img: jsInterCert },
        { id: 8, img: webDevCert }
    ]);

    return { projects, technologies, certificates }
})