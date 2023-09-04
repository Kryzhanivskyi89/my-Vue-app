<template>
    <div v-if="isVisible">
        <h1 v-show="false">Directives</h1>
        <ul>
            <template v-for="fruit in fruits">
                <li v-if="fruit === 'apple'" :key="fruit">{{ fruit }}</li>
            </template>
        </ul>
        <ul>
            <li v-for="car in cars" :key="car.color">{{ car.color }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'DirectivesTest',
        data() {
            return {
                isVisible: true,
                fruits: ['kiwi', 'banana', 'apple'],
                cars: {
                    audi: {
                        color: 'red'
                    },
                    bmw: {
                        color:'black'
                    }
                } 
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>