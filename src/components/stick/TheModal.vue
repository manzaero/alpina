<template>
    <div class="modal-backdrop" @click="closeModal"></div>
    <div class="the-modal">
        <div class="the-modal__header">
            <span>Фильтры</span>
            <span>
                <i
                    class="material-icons"
                    @click="closeModal"
                >clear</i>
            </span>
        </div>
        <div class="the-modal__content">
            <slot></slot>
        </div>
        <div class="the-modal__footer">
            <button class="btn stick__button">Очистить</button>
            <button class="btn stick__button">Применить</button>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        closeModal(){
            this.$emit('closeModal')
        }
    }
}
</script>

<style lang="scss" scoped>
.the-modal {
    padding: 16px;
    background-color: #fff;
    position: fixed;
    width: 300px;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 333;
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
    &__header, &__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__header span:first-child {
        margin-top: 40px;
    }
    &__content {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    i {
        cursor: pointer;
    }
}
.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .35);
    z-index: 222;
}
</style>