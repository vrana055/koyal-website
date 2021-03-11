<template>
    <div class="header-logo">
        <router-link @click.native="pushAndClose" :class="'logo logo-secondary transform-scale-h ' + linkClass" title="Logo" to="/">
            <img :src="'assets/img/logo/logo-' + logoColor + '.svg'" alt="Logo">
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Logo',
        props: ['logoColor', 'linkClass'],
        methods: {
            pushAndClose() {
                if ( document.body.classList.contains( 'modal-open' ) ) {
                    document.body.classList.remove( 'modal-open' );
                }

                this.$store.commit( 'variablesNull' );
            }
        }
    }
</script>
