<template>
    <header id="header" class="site-header">
        <div class="wrapper">
            <div class="header-content d-flex justify-content-between">
                <div class="header-left align-self-center">
                    <div class="header-logo">
                        <router-link class="logo logo-primary transform-scale-h" title="Logo" to="/">
                            <img src="assets/img/logo/logo-dark.svg" alt="Logo">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>
