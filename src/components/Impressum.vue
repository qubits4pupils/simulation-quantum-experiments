<template>
  <div style="max-width: 824px; margin:auto; padding: 8px; line-height: 1.5">
    <h1 style="text-align: center">
      {{ $t('imprint.label') }}
    </h1>
    <table border="1">
      <tbody>
      <tr>
        <td>{{ $t('imprint.host.label') }}</td>
        <td>{{ $t('imprint.host.value') }}</td>
      </tr>
      <tr>
        <td>{{ $t('imprint.responsiblePerson.label') }}</td>
        <td>{{ $t('imprint.responsiblePerson.value') }}</td>
      </tr>
      <tr>
        <td>{{ $t('imprint.address.label') }}</td>
        <td>{{ $t('imprint.address.value') }}</td>
      </tr>
      <tr>
        <td>{{ $t('imprint.phone.label') }}</td>
        <td>{{ $t('imprint.phone.value') }}</td>
      </tr>
      <tr>
        <td>{{ $t('imprint.email.label') }}</td>
        <td>{{ $t('imprint.email.value') }}</td>
      </tr>
      <tr>
        <td>{{ $t('imprint.representatives.label') }}</td>
        <td>{{ $t('imprint.representatives.value') }}</td>
      </tr>
      <tr>
        <td>{{ $t('imprint.register.label') }}</td>
        <td>{{ $t('imprint.register.value') }}</td>
      </tr>
      <tr>
        <td>{{ $t('imprint.cooperation.label') }}</td>
        <td>{{ $t('imprint.cooperation.value') }}</td>
      </tr>
      </tbody>
    </table>

    <h3>{{ $t('imprint.disclaimer.label') }}</h3>
    <p>
      {{ $t('imprint.disclaimer.value') }}
    </p>

  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

td {
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: left;
}

td:first-child {
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:nth-child(odd) {
  background-color: #fff;
}

tr:hover {
  background-color: #f1f1f1;
}
</style>