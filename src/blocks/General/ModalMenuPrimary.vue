<template>
    <nav class="menu-primary">
        <ul class="nav">
            <li class="nav-item">
                <router-link @click.native="toggleMenuModal" title="About" to="/#services">Services</router-link>
            </li>

            <li class="nav-item">
                <router-link @click.native="toggleMenuModal" title="About Us" to="/#about-us">About Us</router-link>
            </li>

            <li class="nav-item">
                <router-link @click.native="toggleMenuModal" title="Team" to="/#team-members">Team</router-link>
            </li>

            <li class="nav-item">
                <router-link @click.native="toggleMenuModal" title="Pricing" to="/#price-plans">Pricing</router-link>
            </li>

            <li class="nav-item">
                <router-link @click.native="toggleMenuModal" title="Testimonials" to="/#testimonials">Testimonials</router-link>
            </li>

            <li :class="[currentPage.includes('news') ? activeClass : '', 'nav-item']">
                <router-link @click.native="toggleMenuModal" title="News" to="/#news">News</router-link>
            </li>

            <li class="nav-item">
                <router-link @click.native="toggleMenuModal" title="Contacts" to="/#contacts">Contacts</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'ModalMenuPrimary',
        data() {
            return {
                activeClass: 'current-nav-item'
            }
        },
        methods: {
            toggleMenuModal: function( event ) {
                this.$store.commit( 'toggleMenuModal' );
                this.$store.commit( 'variablesNull' );
            }
        },
        computed: {
            currentPage() {
                return this.$route.path;
            }
        }
    }
</script>
