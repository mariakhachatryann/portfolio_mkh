<template>
    <div class="loader">
        <img class="w-20 h-20 rounded-full absolute" src="../assets/logo/mkh.jpg">
    </div>
</template>

<style scoped>
.loader {
    border: 4px solid #0DFC4B;
    border-radius: 50%;
    border-top: 4px solid #f000;
    width: 88px;
    height: 88px;
    -webkit-animation: spin 2s linear infinite;
    /* Safari */
    animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}</style>