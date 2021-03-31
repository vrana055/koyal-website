<template>
    <div id="video" :class="'block '+ spacerClass +''">
        <div class="embed">
            <div class="embed-image-overlay">
                <!-- <button class="embed-click" @click="toggler = !toggler">
                    <div class="embed-center">
                        <div class="embed-play">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                </button> -->

                <div class="embed-image">
                    <div class="img object-fit">
                        <div class="object-fit-cover">
                            
                        <h6 class="text-primary text-uppercase">Why India?</h6>
                            
                        <img src="assets/img/placeholder/WhatsApp_Image_2020-11-24_at_13.46.171.jpeg" alt="Video">
                        </div>
                    </div>
                </div>

                <div class="embed-bg"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import FsLightbox from 'fslightbox-vue';

    export default {
        name: 'Video',
        props: ['spacerClass'],
        components: { FsLightbox },
        data() {
            return {
                toggler: false
            }
        }
    }
</script>
