<template>

    <div class="section__carousel-wrap">
      <div class="section__carousel owl-carousel owl-loaded" id="popular">
        <div class="owl-stage-outer owl-height">
          <div class="owl-stage">
            <slot />
          </div>
        </div>
        <div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span
              aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span
              aria-label="Next">›</span></button></div>
        <div class="owl-dots disabled"></div>
      </div>

      <!-- <button class="section__nav section__nav--cards section__nav--prev" data-nav="#popular" type="button"><svg
          width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.25 7.72559L16.25 7.72559" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          </path>
          <path d="M7.2998 1.70124L1.2498 7.72524L7.2998 13.7502" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round"></path>
        </svg></button>
      <button class="section__nav section__nav--cards section__nav--next" data-nav="#popular" type="button"><svg
          width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.75 7.72559L0.75 7.72559" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          </path>
          <path d="M9.7002 1.70124L15.7502 7.72524L9.7002 13.7502" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round"></path>
        </svg></button> -->
    </div>

</template>

<style scoped>
.owl-stage-outer {
  height: 318.5px;
  overflow: scroll;
}
.owl-stage {
  width: 2000px;
}
</style>
