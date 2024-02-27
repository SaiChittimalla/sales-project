<template>
  <table id="myTable">
    <button class="btn btn-dark">TEST` `</button>
    <thead>
      <tr>
        <th
          v-for="(column, index) in columns"
          :key="index"
          class="draggable"
          @dragstart="dragStart(index)"
          @dragover.prevent
          @drop="drop(index)"
          @dragend="dragEnd"
          @dragleave="dragLeave"
          :class="{
            dragging: index === draggedIndex,
            'drop-indicator': index === dropIndex,
          }"
        >
          {{ column }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td v-for="(row, index) in rows" :key="index">
          {{ row }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
  <script>
export default {
  data() {
    return {
      columns: ["Column 1", "Column 2", "Column 3"],

      draggedIndex: null,
      dropIndex: null,
      rows: ["1", "2", "3"],
    };
  },
  methods: {
    dragStart(index) {
      this.draggedIndex = index;
    },
    dragEnd() {
      this.draggedIndex = null;
      this.dropIndex = null;
      this.removeDropIndicator();
    },
    dragLeave() {
      this.dropIndex = null;
      this.removeDropIndicator();
    },
    drop(index) {
      if (this.draggedIndex !== null && this.draggedIndex !== index) {
        // Swap columns in the array
        const temp = this.columns[this.draggedIndex];
        this.columns.splice(this.draggedIndex, 1);
        this.columns.splice(index, 0, temp);
      }
      this.dragEnd();
    },
    removeDropIndicator() {
      this.$el
        .querySelectorAll(".drop-indicator")
        .forEach((indicator) => indicator.classList.remove("drop-indicator"));
    },
  },
};
</script>
  
  <style scoped>
#myTable {
  border-collapse: collapse;
  width: 100%;
}

#myTable th,
#myTable td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

#myTable th {
  background-color: #f2f2f2;
  cursor: crosshair;
}

#myTable th.dragging {
  opacity: 0.5;
}

#myTable th.drop-indicator {
  border: 2px dashed #333;
}
</style>
  
  
  <style scoped>
#myTable {
  border-collapse: collapse;
  width: 100%;
}

#myTable th,
#myTable td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

#myTable th {
  background-color: #f2f2f2;
  cursor: grab;
}

#myTable th.dragging {
  opacity: 0.5;
}

#myTable th.drop-indicator {
  border: 2px dashed #333;
}
</style>
  

  
<style scoped>
#myTable {
  border-collapse: collapse;
  width: 100%;
}

#myTable th,
#myTable td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

#myTable th {
  background-color: #f2f2f2;
  cursor: grab;
}

#myTable th.dragging {
  opacity: 0.5;
}

#myTable th.drop-indicator {
  border: 2px dashed #333;
}
</style>
