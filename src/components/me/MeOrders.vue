<template>
  <div class="tab-pane">
    <div class="myaccount-content">
      <h3>Orders</h3>
      <div class="myaccount-table table-responsive text-center">
        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in orders" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.status }}</td>
              <td>{{ item.price }}</td>
              <td><a href="" class="btn">View</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeOrders",
  data() {
      return {
          orders: [
              {
                  id: 1,
                  name: 'Mostarizing Oil',
                  date: 'July 22, 2018',
                  status: 'Pending',
                  price: '$100'
              },
              {
                  id: 2,
                  name: 'Mostarizing Oil',
                  date: 'July 22, 2018',
                  status: 'Pending',
                  price: '$100'
              },
              {
                  id: 3,
                  name: 'Mostarizing Oil',
                  date: 'July 22, 2018',
                  status: 'Pending',
                  price: '$100'
              },
          ]
      }
  }
};
</script>

<style scoped src="@/assets/css/components/me/Me.css"></style>
