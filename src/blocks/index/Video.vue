<template>
    <div id="video" :class="'block '+ spacerClass +''">
        <div class="embed">
            <div class="embed-image-overlay">

                <div class="embed-image">
                    <div class="img object-fit">
                        <div class="object-fit-cover">

                             <div class="title">
                                 <div class="wrapper">
                                    <h6 class="text-primary text-uppercase">Why India?</h6>
                                 </div>
                            </div>
                            
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
