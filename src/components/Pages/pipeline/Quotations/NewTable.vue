<template>
  <div>
    <table>
      <thead class="head">
        <tr>
          <th v-for="(column, index) in columns" :key="index" 
              draggable="true" @dragstart="onColumnDragStart(index)" 
              @dragover="allowDrop" @drop="onColumnDrop(index)">
            {{ column }}
          </th>
        </tr>
      </thead>
      
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td v-for="(column, colIndex) in row" :key="colIndex">
            {{ column }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: ['Date', 'Customer', 'Sales Order', 'Status', 'Item Code'],
      rows: [
        { date: '06-02-2024', customer: 'Adarsh', salesOrder: 'SAL-ORD-2024-00013', status: 'Delivered', itemCode: 'SKU001' },
        { date: '03-02-2024', customer: 'Sai', salesOrder: 'SAL-ORD-2024-00013', status: 'Delivered', itemCode: 'SKU001' },
        { date: '03-02-2024', customer: 'Narendhar', salesOrder: 'SAL-ORD-2024-00013', status: 'Delivered', itemCode: 'SKU001' },
        { date: '03-02-2024', customer: 'Naveen', salesOrder: 'SAL-ORD-2024-00013', status: 'Delivered', itemCode: 'SKU001' },
        { date: '03-02-2024', customer: 'Bharat', salesOrder: 'SAL-ORD-2024-00013', status: 'Delivered', itemCode: 'SKU001' },
        // Add more rows as needed
      ],
      draggingColumnIndex: null
    };
  },
  methods: {
    onColumnDragStart(index) {
      this.draggingColumnIndex = index;
    },
    onColumnDrop(index) {
      const draggedColumn = this.columns[this.draggingColumnIndex];
      this.columns.splice(this.draggingColumnIndex, 1);
      this.columns.splice(index, 0, draggedColumn);
      this.draggingColumnIndex = null;
    },
    allowDrop(event) {
      event.preventDefault();
    }
  }
};
</script>

<style scoped>
table tr td {
  border: 1px solid black;
  padding: 10px;
  font-size: 14px;
}
.head th {
  border: 1px solid black;
  text-align: center;
  padding: 10px;
  font-size: 15px;
}
</style>
