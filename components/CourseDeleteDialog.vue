<template>
  <!-- DELETE DIALOG CONFORMATION BEGIN -->
  <Transition>
    <div
      class="cedu-dialog__wrapper"
    >
      <div class="cedu-dialog__card">
        <div class="cedu-dialog__card__header">
          Delete Conformation
        </div>
        <div class="cedu-dialog__card__body">
          Are you sure you want to delete the course <strong>{{ courseTitle }}</strong>?
          This operation is irreversible!
        </div>
        <div class="cedu-dialog__card__footer">
          <button
            class="btn btn-danger p-2 d-flex align-items-center"
            @click="deleteCourse(courseId)"
            :disabled="isLoading"
          >
            <div v-if="isLoading" class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <span>Delete</span>
          </button>
          <button
            class="btn btn-secondary p-2"
            @click="closeDialog()"
            :disabled="isLoading"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </Transition>
  <!-- DELETE DIALOG CONFORMATION END -->
</template>

<script>
export default {
  props: ['courseId', 'courseTitle'],
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    deleteCourse(courseId) {
      this.isLoading = true;
      this.$axios.delete('api/course/' + courseId, {credentials: true}).then((res) => {
      console.log(res);
      this.isLoading = false;
      this.$emit('close');
      this.$nuxt.refresh();
      }).catch((err) => {
        console.log(err);
        this.isLoading = false;
      });
    },
    closeDialog() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.cedu-dialog__wrapper {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cedu-dialog__card {
  border-radius: 1rem;
  background-color: white;
  color: black;
  padding: 1.5rem;
  width: 50%;
  box-shadow: 0 0 12px black;
}

.cedu-dialog__card__header {
  font-weight: 700;
  font-size: x-large;
  margin: 1rem 0;
}

.cedu-dialog__card__body {
  margin: 1rem 0;
}

.cedu-dialog__card__footer {
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 1rem;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
