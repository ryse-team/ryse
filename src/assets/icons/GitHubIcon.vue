<script setup>
const props = defineProps({
  width: {
    type: [String, Number],
    default: 24
  },
  height: {
    type: [String, Number],
    default: 24
  },
  color: {
    type: String,
    default: 'currentColor'
  }
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="currentColor"
    :stroke="color"
    stroke-width="0"
    class="w-5 h-5 text-emerald-300 group-hover:text-white transition-colors"
    aria-hidden="true"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577
      0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61C4.422 17.07 3.633
      16.7 3.633 16.7c-1.087-.743.083-.728.083-.728 1.205.085 1.84 1.237
      1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.419-1.304.762-1.604-2.665-.304-5.467-1.332-5.467-5.931
      0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322
      3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404
      2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.874.12 3.176.77.84
      1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.48 5.921.43.372.823 1.104.823
      2.222 0 1.604-.015 2.896-.015 3.289 0 .319.216.694.825.576C20.565 21.796
      24 17.298 24 12c0-6.627-5.373-12-12-12z"
    />
  </svg>
</template>
