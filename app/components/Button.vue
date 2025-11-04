<template>
    <button style="transition: all .5s ease;" :class class="p-2 rounded-2xl text-center shadow-lg">
        {{ text }}
    </button>
</template>

<script setup>


defineProps({
    text: String,
    class: String
}
)

</script>